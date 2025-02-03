export const getSortedStrings = (strings: string[]): string[] => {
    if (!strings || strings.length === 0) return [];
    return [...strings].sort();
  };
  