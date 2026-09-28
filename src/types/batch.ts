import { BusinessWebsite } from './index';
import { ReferenceDesignBlueprint, InspectionStatus } from './referenceDesign';

export interface BatchReferenceItem {
  referenceId: string;
  categoryNo: number;
  categoryId: string;
  categoryName: string;
  referenceWebsiteName: string;
  originalReferenceUrl: string;
  inspectionStatus: InspectionStatus;
  inspectionNotes: string;
  implementationStatus: 'implemented' | 'ready' | 'draft';
  previewStatus: 'ready' | 'pending';
  publishStatus: 'active' | 'archived';
  desktopScreenshot: string;
  mobileScreenshot: string;
  blueprint: ReferenceDesignBlueprint;
  website: BusinessWebsite;
}

export interface WebsiteBatch {
  id: string; // e.g. 'BATCH-001'
  name: string;
  createdAt: string;
  status: 'active' | 'archived';
  categoryCount: number;
  websiteCount: number;
  categories: Array<{ id: string; name: string; categoryNo: number }>;
  references: BatchReferenceItem[];
}
