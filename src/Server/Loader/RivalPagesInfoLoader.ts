import DataStore from '../../Entity/DataStore'
import Loader from './Loader'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import { assign } from 'lodash'
import PageConfig from '../Config/Definition/PageConfig'

export default class RivalPagesInfoLoader implements Loader {

    constructor(
        private config: PageConfig[],
        private pageInfoApi: PageInfoApi
    ) {}

    public load(dataStore: DataStore): Promise<DataStore> {
        return Promise.all(
            this.config
                .map((pageConfig) => pageConfig.slug)
                .map(
                    (slug) => this.pageInfoApi.get(slug).then((response) => response)
                )
        ).then((results) => {
            // tslint:disable-next-line:arrow-return-shorthand
            const rivalPages = results.map((info) => { return { info } } )
            return assign({}, dataStore, {
                rivalPages
            })
        })
    }

    public loadAndWrite(dataStore: DataStore): Promise<void> {
        return Promise.all(
            this.config
                .map((pageConfig) => pageConfig.slug)
                .map(
                    (slug) => this.pageInfoApi.get(slug).then((response) => response)
                )
        ).then((results) => {
            // tslint:disable-next-line:arrow-return-shorthand
            dataStore.rivalPages = results.map((info) => { return { info } } )
        })
    }

}
