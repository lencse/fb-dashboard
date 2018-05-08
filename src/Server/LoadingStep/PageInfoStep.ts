import LoadingStep from './LoadingStep'
import PageInfo from '../Data/PageInfo'
import PageInfoApi from '../FacebookApi/PageInfoApi'

export default class PageInfoStep implements LoadingStep<{}, PageInfo> {

    constructor(
        private pageInfoApi: PageInfoApi,
        private pageSlug: string
    ) {}

    public async step(input: {}): Promise<PageInfo> {
        return this.pageInfoApi.get(this.pageSlug).then(((page) => page))
    }

}
