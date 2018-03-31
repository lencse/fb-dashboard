import DataStore from '../../Entity/DataStore'
import MainPageInfoLoader from '../Loader/MainPageInfoLoader'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as json from 'koa-json'
import KoaWebserver from '../Adapter/Application/KoaWebserver'
import Webserver from './Webserver'

export default class Application {

    private dataStore = new DataStore()

    constructor(
        private mainPageInfoLoader: MainPageInfoLoader,
        private webserver: Webserver
    ) {}

    public run(): void {
        this.mainPageInfoLoader.load(this.dataStore).then((store) => {
            this.dataStore = store
        })
        this.webserver.dataStore('/api/v1/data', () => this.dataStore)
    }

}