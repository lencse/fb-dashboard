import DataStore from '../../Entity/DataStore'
import MainPageInfoLoader from '../Loader/MainPageInfoLoader'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import Webserver from './Webserver'
import Store from '../../Entity/Store'

export default class Application {

    private dataStore: DataStore = Store.default()

    constructor(
        private mainPageInfoLoader: MainPageInfoLoader,
        private webserver: Webserver
    ) {}

    public run(): void {
        this.mainPageInfoLoader.load(this.dataStore).then((store) => {
            this.dataStore = store
        })
        this.webserver.dataStore('/api/v1/data', () => this.dataStore)
        this.webserver.static('public')
    }

}
