import Axios from 'axios'
import UrlGenerator from './UrlGenerator'
import Web from './Web'
import Api from './Api'

export default class WebApi implements Api {

    constructor(
        private url: UrlGenerator,
        private web: Web
    ) {}

    public call(path: string, params: any): Promise<any> {
        const url = this.url.getUrl(path, params)
        return this.web.get(url)
    }

}
