export default (query: Record<string, unknown>): string[][] => {
  const normalizedQuery: string[][] = [];

  Object.entries(query).forEach(entry => normalizedQuery.push([
    entry[0],
    `${entry[1]}`,
  ]));

  return normalizedQuery;
};
