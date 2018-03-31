export default class UrlGenerator {

    constructor(
        private config: ApiConfig
    ) {}

    public getUrl(path: string, params: any): string {
        params.access_token = this.config.token
        const paramArr = Object.keys(params).map((key) => {
            return [key, encodeURIComponent(params[key])].join('=')
        })
        return `${this.config.url}/${this.config.version}${path}?${paramArr.join('&')}`
    }

}
