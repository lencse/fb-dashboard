import DataStore from '../../Entity/DataStore'
import Loader from './Loader'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import PageConfig from '../Config/Definition/PageConfig'

export default class RivalPagesInfoLoader implements Loader {

    constructor(
        private config: PageConfig[],
        private pageInfoApi: PageInfoApi
    ) {}

    public load(dataStore: DataStore): Promise<void> {
        return Promise.all(
            this.config
                .map((pageConfig) => pageConfig.slug)
                .map(
                    (slug) => this.pageInfoApi.get(slug)
                )
        ).then((results) => {
            // tslint:disable-next-line:arrow-return-shorthand
            dataStore.rivalPages = results.map((info) => {
                return {
                    info,
                    minutesSinceLastPost: 0
                }
            })
        })
    }

}
