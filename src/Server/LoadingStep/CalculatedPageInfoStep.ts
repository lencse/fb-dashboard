import LoadingStep from './LoadingStep'
import PageInfo from '../Data/PageInfo'
import PageInfoApi from '../FacebookApi/PageInfoApi'
import CalculatedPageInfo from '../Data/CalculatedPageInfo'
import Clock from '../Clock/Clock'

export default class CalculatedPageInfoStep implements LoadingStep<PageInfo, CalculatedPageInfo> {

    constructor(
        private clock: Clock
    ) {}

    public async step(input: PageInfo): Promise<CalculatedPageInfo> {
        const now = this.clock.now().getTime()
        const lastPostDate = input.lastPostDate.getTime()
        const result = {
            ...input,
            minutesSinceLastPost: Math.floor((now - lastPostDate) / 1000 / 60)
        }
        return Promise.resolve(result)
    }

}
