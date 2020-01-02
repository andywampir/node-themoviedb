export default (query: object) => {
  const normalizedQuery: string[][] = [];

  Object.entries(query).forEach(([key, value]) => normalizedQuery.push([key, `${value}`]));

  return normalizedQuery;
};
