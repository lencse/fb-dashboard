import Web from '../FacebookApi/WebApi/Web'
import AxiosWeb from '../Adapter/FacebookApi/AxiosWeb'
import AppConfig from '../../Config/Definition/AppConfig'
import UrlGenerator from '../FacebookApi/WebApi/UrlGenerator'
import Api from '../FacebookApi/WebApi/Api'
import MockApi from '../Adapter/FacebookApi/MockApi'
import WebApi from '../Adapter/FacebookApi/WebApi'
import PageInfoApi from '../FacebookApi/PageInfoApi'

// tslint:disable:member-ordering

export default class Dic {

    constructor(
        private config: AppConfig
    ) {}

    private web: Web
    public getWeb(): Web {
        return this.web ? this.web : this.web = new AxiosWeb()
    }

    private urlGenerator: UrlGenerator
    public getUrlGenerator(): UrlGenerator {
        return this.urlGenerator ? this.urlGenerator : this.urlGenerator = new UrlGenerator(this.config.facebookApi)
    }

    private api: Api
    public getApi(): Api {
        return this.api ? this.api : this.api = (
            this.config.mock ? new MockApi() : new WebApi(this.getUrlGenerator(), this.getWeb())
        )
    }

    private pageInfoApi: PageInfoApi
    public getPageInfoApi(): PageInfoApi {
        return this.pageInfoApi ? this.pageInfoApi : this.pageInfoApi = new PageInfoApi(this.getApi())
    }

}
