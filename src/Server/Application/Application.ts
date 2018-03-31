import DataStore from '../../Entity/DataStore'
import MainPageInfoLoader from '../Loader/MainPageInfoLoader'
import * as Koa from 'koa'
import * as Router from 'koa-router'

export default class Application {

    private dataStore = new DataStore()

    constructor(
        private mainPageInfoLoader: MainPageInfoLoader
    ) {}

    public run(): void {
        this.mainPageInfoLoader.load(this.dataStore).then((store) => {
            this.dataStore = store
        })
        const koa = new Koa()
        const router = new Router()
        router.get('/api/v1/data', async (ctx, next) => {
            ctx.body = 'XXX'
        })
        koa.use(router.routes()).use(router.allowedMethods())
        koa.listen(6810)
    }

}
