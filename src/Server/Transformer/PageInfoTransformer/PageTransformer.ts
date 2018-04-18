import PageInfo from '../../../Entity/Page/PageInfo'
import Page from '../../../Entity/Page/Page'

export default interface PageTransformer {

    transform(page: Page): void

}
