export default (endpoint: string, params: Record<string, string>): string => {
  const regExp = /{(.+?)}/;
  let parsedEndpoint = endpoint;
  let match: RegExpExecArray | null = null;

  // eslint-disable-next-line no-cond-assign
  while (match = regExp.exec(parsedEndpoint))
    parsedEndpoint = parsedEndpoint.replace(match[0], params[match[1]]);

  return parsedEndpoint;
};
