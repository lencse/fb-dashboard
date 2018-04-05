import DataStore from '../../Entity/DataStore'
import Loader from './Loader'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import { assign } from 'lodash'

export default class MainPageInfoLoader implements Loader {

    constructor(
        private mainPageSlug: string,
        private pageInfoApi: PageInfoApi
    ) {}

    public load(dataStore: DataStore): Promise<DataStore> {
        return this.pageInfoApi.get(this.mainPageSlug).then((response) => {
            return assign({}, dataStore, {
                mainPage: {
                    info: response
                }
            })
        })
    }

    public loadAndWrite(dataStore: DataStore): Promise<null> {
        return this.pageInfoApi.get(this.mainPageSlug).then((response) => {
            dataStore.mainPage.info = response
            return null
        })
    }

}
