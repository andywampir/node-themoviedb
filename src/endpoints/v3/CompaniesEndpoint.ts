/* eslint-disable camelcase */
import Executor from '../../utils/Executor';
import rqst from '../../utils/requests';

import {
  CompaniesReturnType, CompaniesConstructorOptions,
} from '../../interfaces/v3/companies';
import { RequiredParameterError } from '../../errors';

export default class CompaniesEndpoint extends Executor<CompaniesReturnType> {
  private readonly apiKey: string;
  private readonly companyID?: number;

  public constructor(options: CompaniesConstructorOptions) {
    super(rqst);

    this.apiKey = options.apiKey;
    this.companyID = options.companyID;
  }

  public details(companyID?: number): CompaniesEndpoint {
    if (!companyID || !this.companyID)
      throw new RequiredParameterError('companyID');

    this.addToExecutionList(
      'details',
      {
        uri: `company/${companyID ?? this.companyID}`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public alternativeNames(companyID?: number): CompaniesEndpoint {
    if (!companyID || !this.companyID)
      throw new RequiredParameterError('companyID');

    this.addToExecutionList(
      'alternativeNames',
      {
        uri: `company/${companyID ?? this.companyID}/alternative_names`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }

  public images(companyID?: number): CompaniesEndpoint {
    if (!companyID || !this.companyID)
      throw new RequiredParameterError('companyID');

    this.addToExecutionList(
      'images',
      {
        uri: `company/${companyID ?? this.companyID}/images`,
        searchParams: { api_key: this.apiKey },
      },
    );

    return this;
  }
}
