export default (query: object) => {
  const normalizedQuery: string[][] = [];

  Object.entries(query).forEach(([key, value]) => [key, `${value}`]);

  return normalizedQuery;
};
