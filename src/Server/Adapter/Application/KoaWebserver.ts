import Webserver from '../../Application/Webserver'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import DataStore from '../../../Entity/DataStore'

export default class KoaWebserver implements Webserver {

    private koa: Koa

    private router: Router

    constructor(port: number) {
        this.koa = new Koa()
        this.router = new Router()
        this.koa.use(json())
        this.koa
            .use(this.router.routes())
            .use(this.router.allowedMethods())
        this.koa.listen(port)
    }

    public dataStore(path: string, store: () => DataStore): void {
        this.router.get(path, async (ctx, next) => {
            ctx.body = store()
        })
    }

}
