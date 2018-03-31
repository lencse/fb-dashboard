import DataStore from '../../Entity/DataStore'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import { assign } from 'lodash'

export default class MainPageInfoLoader {

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

}
