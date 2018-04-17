import Clock from '../../Clock/Clock'
import PageInfoTransformer from './PageInfoTransformer'
import PageInfo from '../../../Entity/Page/PageInfo'

export default class MinutesSinceLastPostTransformer implements PageInfoTransformer {

    constructor(
        private clock: Clock
    ) {}

    public transform(info: PageInfo): void {
        const now = this.clock.now().getTime()
        const lastPostDate = info.lastPostDate.getTime()
        info.minutesSinceLastPost = Math.floor((now - lastPostDate) / 1000 / 60)
    }

}
