/**
 * Configuration class needed in base class.
 * The config is provided to the API client at initialization time.
 * API clients inherit from #AuthorizedApiBase and provide the config.
 */
export class IConfig {
    /**
     * Returns a valid value for the Authorization header.
     * Used to dynamically inject the current auth header.
     */
    public baseUrl: string | undefined = process.env.REACT_APP_BASE_URL
    
}

export class ApiBase {
    private readonly config: IConfig;

    protected constructor(config: IConfig) {
        this.config = config;
    }

    protected transformOptions = (options: RequestInit): Promise<RequestInit> => {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
        };
        return Promise.resolve(options);
    };

    protected getBaseUrl(defaultUrl: string, baseUrl?: string): string {
        return this.config.baseUrl ?? '';
    }
}
