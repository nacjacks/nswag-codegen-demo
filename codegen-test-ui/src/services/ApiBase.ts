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
    public authorizationToken = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjY1OGYzNjc2LTM0ZTMtNGZkNS1iNzM1LTVlMWM0NzY5MjU5MSIsInN1YiI6InRlc3RAZW1haWwuY29tIiwiZW1haWwiOiJ0ZXN0QGVtYWlsLmNvbSIsIm5iZiI6MTY4Mzg2MjU3NSwiZXhwIjoxNjgzODYzMTc1LCJpYXQiOjE2ODM4NjI1NzUsImlzcyI6Iklzc3VlciIsImF1ZCI6IkF1ZGllbmNlIn0._c0X4OW6KRkhRrj8jKCeBxyvX7foRkwMcX9SV0PShH_vac7rkpGmv8Vcg3YAjMz5wws3OSBjO7_FA6EFSf7cbg';
}

export class ApiBase {
    private readonly config: IConfig;

    protected constructor(config: IConfig) {
        this.config = config;
    }

    protected transformOptions = (options: RequestInit): Promise<RequestInit> => {
        options.headers = {
            ...options.headers,
            Authorization: this.config.authorizationToken,
        };
        return Promise.resolve(options);
    };
}