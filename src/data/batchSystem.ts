import { WebsiteBatch, BatchReferenceItem } from '../types/batch';
import { BusinessWebsite } from '../types';
import { BATCH_001_REFERENCES_PART1 } from './batch001SitesPart1';
import { BATCH_001_REFERENCES_PART2 } from './batch001SitesPart2';
import { ARCHIVED_LEGACY_CATALOG } from './archivedLegacyCatalog';

export const BATCH_001_CATEGORIES = [
  { categoryNo: 1, id: 'restaurant', name: 'Restaurant' },
  { categoryNo: 2, id: 'cafe', name: 'Cafe' },
  { categoryNo: 3, id: 'rooftop_cafe', name: 'Rooftop Cafe' },
  { categoryNo: 4, id: 'gaming_cafe', name: 'Gaming Cafe' },
  { categoryNo: 5, id: 'bakery', name: 'Bakery' },
  { categoryNo: 6, id: 'home_baker', name: 'Home Baker' },
  { categoryNo: 7, id: 'sweets', name: 'Sweet Shop / Mithai' },
  { categoryNo: 8, id: 'icecream', name: 'Ice Cream Shop' },
  { categoryNo: 9, id: 'tiffin', name: 'Tiffin Service' },
  { categoryNo: 10, id: 'office_tiffin', name: 'Office Tiffin Service' }
];

export const BATCH_001_ALL_REFERENCES: BatchReferenceItem[] = [
  ...BATCH_001_REFERENCES_PART1,
  ...BATCH_001_REFERENCES_PART2
];

export const INITIAL_BATCH_001: WebsiteBatch = {
  id: 'BATCH-001',
  name: 'Batch 001 — Food & Hospitality Pioneers',
  createdAt: '2026-09-28T16:00:00Z',
  status: 'active',
  categoryCount: 10,
  websiteCount: 20,
  categories: BATCH_001_CATEGORIES,
  references: BATCH_001_ALL_REFERENCES
};

// Returns only the 20 websites of the active batch
export const BATCH_001_WEBSITES: BusinessWebsite[] = BATCH_001_ALL_REFERENCES.map(ref => ref.website);

export class BatchManager {
  private static STORAGE_KEY = 'raositez_batches_v1';
  private static ACTIVE_KEY = 'raositez_active_batch_id_v1';

  static getBatches(): WebsiteBatch[] {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch {
        // fallback
      }
    }
    return [INITIAL_BATCH_001];
  }

  static getActiveBatchId(): string {
    if (typeof window !== 'undefined') {
      try {
        const id = localStorage.getItem(this.ACTIVE_KEY);
        if (id) return id;
      } catch {
        // fallback
      }
    }
    return 'BATCH-001';
  }

  static getActiveBatch(): WebsiteBatch {
    const batches = this.getBatches();
    const activeId = this.getActiveBatchId();
    return batches.find(b => b.id === activeId) || batches[0] || INITIAL_BATCH_001;
  }

  static getActiveWebsites(): BusinessWebsite[] {
    const active = this.getActiveBatch();
    return active.references.map(r => r.website);
  }

  static saveBatches(batches: WebsiteBatch[]): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(batches));
      } catch (e) {
        console.error('Failed to save batches to storage', e);
      }
    }
  }

  static setActiveBatchId(batchId: string): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.ACTIVE_KEY, batchId);
      } catch (e) {
        console.error('Failed to set active batch ID', e);
      }
    }
  }
}
