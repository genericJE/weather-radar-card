export const CARD_VERSION = '3.4.0-beta';

// Map layer z-index stacking (low → high). Markers (incl. wind overlay) default to ~600 in Leaflet.
export const Z_BASEMAP = 0;
export const Z_LABELS = 2;
export const Z_RADAR_BASE = 100;       // current radar frame floor; +1 each crossfade
