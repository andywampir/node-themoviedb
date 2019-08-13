export default (endpoint: string, params: object) => {
  const regExp = /{(.+?)}/;
  let parsedEndpoint = endpoint;
  let match: RegExpExecArray;

  while (match = regExp.exec(parsedEndpoint)) {
    parsedEndpoint = parsedEndpoint.replace(match[0], params[match[1]]);
  }

  return parsedEndpoint;
};
