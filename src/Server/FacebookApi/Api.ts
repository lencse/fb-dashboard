import Axios from 'axios'

export default class Api {

    constructor(
        private url: string,
        private version: string,
        private token: string
    ) {}

    public call(path: string, params: any): Promise<any> {
        params.access_token = this.token
        const paramArr = []
        Object.keys(params).forEach((key) => {
            paramArr.push([key, encodeURIComponent(params[key])].join('='))
        })
        const url = `${this.url}/${this.version}${path}?${paramArr.join('&')}`
        return Axios.get(url).then((response) => response.data).catch((reason) => {
            console.error(reason)
        })
    }

}
