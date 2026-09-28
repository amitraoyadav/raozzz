import { BusinessWebsite } from '../types';
import { DEMO_SITES_PART1 } from './demoSitesPart1';
import { DEMO_SITES_PART2 } from './demoSitesPart2';
import { DEMO_SITES_PART3 } from './demoSitesPart3';
import { DEMO_SITES_PART4 } from './demoSitesPart4';
import { NEW_DEMO_SITES_PART1 } from './newDemoSitesPart1';
import { NEW_DEMO_SITES_PART2 } from './newDemoSitesPart2';
import { NEW_DEMO_SITES_PART3 } from './newDemoSitesPart3';
import { NEW_DEMO_SITES_PART4 } from './newDemoSitesPart4';

/**
 * ARCHIVED LEGACY WEBSITE CATALOG (BACKUP)
 * Preserves the previous 80 demo websites and generic templates.
 * Safe from permanent deletion; can be restored or toggled by the administrator.
 */
export const ARCHIVED_LEGACY_CATALOG: BusinessWebsite[] = [
  ...DEMO_SITES_PART1,
  ...DEMO_SITES_PART2,
  ...DEMO_SITES_PART3,
  ...DEMO_SITES_PART4,
  ...NEW_DEMO_SITES_PART1,
  ...NEW_DEMO_SITES_PART2,
  ...NEW_DEMO_SITES_PART3,
  ...NEW_DEMO_SITES_PART4
];

export const ARCHIVED_CATALOG_METADATA = {
  archivedAt: '2026-09-28T16:00:00Z',
  totalSites: ARCHIVED_LEGACY_CATALOG.length,
  description: 'Full backup of legacy RaoSitez demo websites prior to Batch 001 activation.',
  status: 'archived_safe' as const
};
