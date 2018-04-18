import DataStore from '../../Entity/DataStore'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import Transformer from './Transformer'
import Clock from '../Clock/Clock'
import PageTransformer from './PageInfoTransformer/PageTransformer'

export default class PageDataTransformer implements Transformer {

    constructor(
        private pageInfoTransformers: PageTransformer[]
    ) {}

    public transform(dataStore: DataStore): void {
        this.pageInfoTransformers.map((transformer) => {
            transformer.transform(dataStore.mainPage)
            dataStore.rivalPages.map((page) => transformer.transform(page))
        })
    }

}
