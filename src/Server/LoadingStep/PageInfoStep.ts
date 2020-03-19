import LoadingStep from './LoadingStep'
import PageInfo from '../Data/PageInfo'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import PageConfig from '../Config/Definition/PageConfig'

export default class PageInfoStep implements LoadingStep<{}, PageInfo> {

    constructor(
        private pageInfoApi: PageInfoApi
    ) {}

    public async step(input: PageConfig): Promise<PageInfo> {
        return this.pageInfoApi.get(input.slug).then(((page) => page))
    }

}
