export default (endpoint: string, params: object): string => {
  const regExp = /{(.+?)}/;
  let parsedEndpoint = endpoint;
  let match: RegExpExecArray = null;

  // eslint-disable-next-line no-cond-assign
  while (match = regExp.exec(parsedEndpoint))
    parsedEndpoint = parsedEndpoint.replace(match[0], params[match[1]]);

  return parsedEndpoint.slice(1);
};
