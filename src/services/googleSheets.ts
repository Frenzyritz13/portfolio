
import { GOOGLE_API_KEY, SHEETS, TABS } from '../config/sheets';
import { SheetData } from '../types/sheets';

const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const fetchSheetData = async <T extends SheetData>(
  sheetId: string,
  tabName: string,
  options?: {
    skipCache?: boolean;
    mapFunction?: (row: any) => T;
  }
): Promise<T[]> => {
  const cacheKey = `${sheetId}_${tabName}`;
  if (
    !options?.skipCache &&
    cache[cacheKey] &&
    Date.now() - cache[cacheKey].timestamp < CACHE_DURATION
  ) {
    return cache[cacheKey].data as T[];
  }

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${tabName}?key=${GOOGLE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
  }
  const result = await response.json();
  const headers: string[] = result.values[0];
  const rows: any[][] = result.values.slice(1);

  let data = rows.map((row) =>
    headers.reduce((obj: any, header: string, idx: number) => {
      let value: any = row[idx] ?? '';

      if (
        value &&
        (header === 'tags' ||
          header === 'skills' ||
          header === 'coordinates')
      ) {
        value =
          header === 'coordinates'
            ? value.split(',').map(Number)
            : value.split(',').map((s) => s.trim());
      }

      if (['rating', 'progress', 'id'].includes(header)) {
        const num = Number(value);
        if (!isNaN(num)) value = num;
      }

      obj[header] = value;
      return obj;
    }, {})
  );

  if (options?.mapFunction) {
    data = data.map(options.mapFunction);
  }

  cache[cacheKey] = { data, timestamp: Date.now() };
  return data as T[];
};

export const updateSheetData = async (
  sheetId: string,
  tabName: string,
  rowId: number,
  data: Partial<SheetData>
): Promise<boolean> => {
  console.error('Update functionality requires OAuth implementation');
  return false;
};

export const clearCache = (sheetId?: string, tabName?: string): void => {
  if (sheetId && tabName) {
    delete cache[`${sheetId}_${tabName}`];
  } else {
    Object.keys(cache).forEach((key) => delete cache[key]);
  }
};
