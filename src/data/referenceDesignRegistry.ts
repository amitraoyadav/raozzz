import {
  ReferenceDesignRegistryItem,
  ReferenceDesignBlueprint,
  DynamicSectionDefinition,
  InspectionStatus
} from '../types/referenceDesign';
import { GENERATED_REFERENCE_REGISTRY } from './generatedRegistryData';

// Re-export the initial registry
export const REFERENCE_DESIGN_REGISTRY: ReferenceDesignRegistryItem[] = GENERATED_REFERENCE_REGISTRY;

// Lookup helpers
export function getAllReferenceRegistryItems(): ReferenceDesignRegistryItem[] {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('raositez_reference_registry_v3');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
  }
  return REFERENCE_DESIGN_REGISTRY;
}

export function getReferenceRegistryItemById(refId: string): ReferenceDesignRegistryItem | undefined {
  const all = getAllReferenceRegistryItems();
  const clean = refId.trim().toLowerCase();
  return all.find(
    r =>
      r.referenceId.toLowerCase() === clean ||
      r.referenceId.replace(/_/g, '-').toLowerCase() === clean ||
      (r.referenceWebsiteName && r.referenceWebsiteName.toLowerCase() === clean)
  );
}

export function getReferencesByCategory(categoryId: string): ReferenceDesignRegistryItem[] {
  const all = getAllReferenceRegistryItems();
  const clean = categoryId.trim().toLowerCase();
  const cleanNoUnderscore = clean.replace(/_/g, ' ');

  const matches = all.filter(r => {
    const cId = r.categoryId.toLowerCase();
    const cName = r.categoryName.toLowerCase();
    return (
      cId === clean ||
      cId === cleanNoUnderscore ||
      cName === clean ||
      cName === cleanNoUnderscore ||
      cName.includes(clean) ||
      clean.includes(cId)
    );
  });

  return matches;
}

export function getRegistryStats() {
  const all = getAllReferenceRegistryItems();
  const inspected = all.filter(r => r.inspectionStatus === 'inspected').length;
  const manualRequired = all.filter(
    r => r.inspectionStatus === 'manual_required' || r.inspectionStatus === 'inaccessible'
  ).length;
  const activeTemplates = all.filter(r => r.isActive && r.templateGenerationStatus === 'ready').length;
  const totalCategories = new Set(all.map(r => r.categoryId)).size;

  return {
    totalReferences: all.length,
    inspected,
    manualRequired,
    activeTemplates,
    totalCategories
  };
}

export function updateReferenceRegistryItem(
  refId: string,
  updates: Partial<ReferenceDesignRegistryItem>
): ReferenceDesignRegistryItem | undefined {
  const all = [...getAllReferenceRegistryItems()];
  const idx = all.findIndex(r => r.referenceId === refId);
  if (idx === -1) return undefined;

  all[idx] = {
    ...all[idx],
    ...updates,
    blueprint: updates.blueprint ? { ...all[idx].blueprint, ...updates.blueprint } : all[idx].blueprint
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('raositez_reference_registry_v3', JSON.stringify(all));
    } catch {
      // Ignore
    }
  }

  return all[idx];
}

// Reset registry to default generated dataset
export function resetReferenceRegistry(): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem('raositez_reference_registry_v3');
    } catch {
      // Ignore
    }
  }
}
