import DataStore from '../../Entity/DataStore'
import Loader from './Loader'
import PageInfoApi from '../FacebookApi/PageInfoApi'

export default class MainPageInfoLoader implements Loader {

    constructor(
        private mainPageSlug: string,
        private pageInfoApi: PageInfoApi
    ) {}

    public load(dataStore: DataStore): Promise<void> {
        return this.pageInfoApi.get(this.mainPageSlug).then((response) => {
            dataStore.mainPage.info = response
        })
    }

}
