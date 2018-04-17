import Web from '../FacebookApi/WebApi/Web'
import AxiosWeb from '../Adapter/FacebookApi/AxiosWeb'
import AppConfig from '../Config/Definition/AppConfig'
import UrlGenerator from '../FacebookApi/WebApi/UrlGenerator'
import Api from '../FacebookApi/WebApi/Api'
import MockApi from '../Adapter/FacebookApi/MockApi'
import WebApi from '../Adapter/FacebookApi/WebApi'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import MainPageInfoLoader from '../Loader/MainPageInfoLoader'
import RivalPagesInfoLoader from '../Loader/RivalPagesInfoLoader'
import Application from '../Application/Application'
import Webserver from '../Application/Webserver'
import KoaWebserver from '../Adapter/Application/KoaWebserver'
import Clock from '../Clock/Clock'
import RealClock from '../Adapter/Clock/RealClock'
import MinutesSinceLastPostTransformer from '../Transformer/PageInfoTransformer/MinutesSinceLastPostTransformer'
import PageTransformer from '../Transformer/PageTransformer'

// tslint:disable:member-ordering

export default class Dic {

    constructor(
        private config: AppConfig
    ) {}

    private web: Web
    public getWeb(): Web {
        return this.web ?
            this.web :
            this.web = new AxiosWeb()
    }

    private urlGenerator: UrlGenerator
    public getUrlGenerator(): UrlGenerator {
        return this.urlGenerator ?
            this.urlGenerator :
            this.urlGenerator = new UrlGenerator(this.config.facebookApi)
    }

    private api: Api
    public getApi(): Api {
        return this.api ? this.api : this.api = (
            this.config.mock ?
                new MockApi() :
                new WebApi(this.getUrlGenerator(), this.getWeb())
        )
    }

    private pageInfoApi: PageInfoApi
    public getPageInfoApi(): PageInfoApi {
        return this.pageInfoApi ?
            this.pageInfoApi :
            this.pageInfoApi = new PageInfoApi(this.getApi())
    }

    private mainPageInfoLoader: MainPageInfoLoader
    public getMainPageInfoLoader(): MainPageInfoLoader {
        return this.mainPageInfoLoader ?
            this.mainPageInfoLoader :
            this.mainPageInfoLoader = new MainPageInfoLoader(
                this.config.pages.main.slug,
                this.getPageInfoApi()
            )
    }

    private rivalPagesInfoLoader: RivalPagesInfoLoader
    public getRivalPagesInfoLoader(): RivalPagesInfoLoader {
        return this.rivalPagesInfoLoader ?
            this.rivalPagesInfoLoader :
            this.rivalPagesInfoLoader = new RivalPagesInfoLoader(
                this.config.pages.rivals,
                this.getPageInfoApi()
            )
    }

    private application: Application
    public getApplication(): Application {
        return this.application ?
            this.application :
            this.application = new Application(
                [
                    this.getMainPageInfoLoader(),
                    this.getRivalPagesInfoLoader()
                ],
                [
                    this.getPageTransformer()
                ],
                this.getWebserver(),
                this.config.refreshIntervalSec
            )
    }

    private webserver: Webserver
    public getWebserver(): Webserver {
        return this.webserver ?
            this.webserver :
            this.webserver = new KoaWebserver(this.config.port)
    }

    private clock: Clock
    public getClock(): Clock {
        return this.clock ?
            this.clock :
            this.clock = new RealClock()
    }

    private minutesSinceLastPostTransformer: MinutesSinceLastPostTransformer
    public getMinutesSinceLastPostTransformer(): MinutesSinceLastPostTransformer {
        return this.minutesSinceLastPostTransformer ?
            this.minutesSinceLastPostTransformer :
            this.minutesSinceLastPostTransformer = new MinutesSinceLastPostTransformer(this.getClock())
    }

    private pageTransformer: PageTransformer
    public getPageTransformer(): PageTransformer {
        return this.pageTransformer ?
            this.pageTransformer :
            this.pageTransformer = new PageTransformer([
                this.getMinutesSinceLastPostTransformer()
            ])
    }

}
