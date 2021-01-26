export default (endpoint: string, params: Record<string, string>): string => {
  const regExp = /{(.+?)}/;
  let parsedEndpoint = endpoint;
  let match: RegExpExecArray | null = regExp.exec(parsedEndpoint);

  while (match) {
    parsedEndpoint = parsedEndpoint.replace(match[0], params[match[1]]);
    match = regExp.exec(parsedEndpoint);
  }

  return parsedEndpoint;
};
