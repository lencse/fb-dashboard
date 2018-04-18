import Clock from '../../Clock/Clock'
import PageTransformer from './PageTransformer'
import PageInfo from '../../../Entity/Page/PageInfo'
import Page from '../../../Entity/Page/Page'

export default class MinutesSinceLastPostTransformer implements PageTransformer {

    constructor(
        private clock: Clock
    ) {}

    public transform(page: Page): void {
        const now = this.clock.now().getTime()
        const lastPostDate = page.info.lastPostDate.getTime()
        page.minutesSinceLastPost = Math.floor((now - lastPostDate) / 1000 / 60)
    }

}
