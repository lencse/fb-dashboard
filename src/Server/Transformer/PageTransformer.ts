import DataStore from '../../Entity/DataStore'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import Transformer from './Transformer'
import Clock from '../Clock/Clock'
import PageInfoTransformer from './PageInfoTransformer/PageInfoTransformer'

export default class PageTransformer implements Transformer {

    constructor(
        private pageInfoTransformers: PageInfoTransformer[]
    ) {}

    public transform(dataStore: DataStore): void {
        this.pageInfoTransformers.map((transformer) => {
            transformer.transform(dataStore.mainPage.info)
            dataStore.rivalPages.map((page) => {
                transformer.transform(page.info)
            })
        })
    }

}
