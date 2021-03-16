export default class RequiredParameterError extends Error {
	public readonly parameter: string;

	public constructor(parameter: string) {
		super(`You must specify a parameter: ${parameter}`);

		this.parameter = parameter;
	}
}
