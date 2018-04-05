import Api from '../../FacebookApi/WebApi/Api'
import Web from '../../FacebookApi/WebApi/Web'
import UrlGenerator from '../../FacebookApi/WebApi/UrlGenerator'

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
