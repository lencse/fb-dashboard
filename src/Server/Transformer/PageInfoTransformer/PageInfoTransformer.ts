import PageInfo from '../../../Entity/Page/PageInfo'

export default interface PageInfoTransformer {

    transform(info: PageInfo): void

}
