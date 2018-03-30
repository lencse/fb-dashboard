import Page from '../../Entity/Page/Page'
import Api from './Api'

export default class GetPageInfo {

    constructor(private api: Api) {}

    public get(slug: string): Promise<Page> {
        const map = new Map<string, string>()
        const call = this.api.call(`/${slug}`, {fields: 'picture{url},name,id,username'})
        return call.then((responseData: any) => {
            const result = new Page()
            result.name = responseData.name
            result.id = responseData.id
            result.slug = responseData.username
            result.profilePic = responseData.picture.data.url
            return result
        })

    }

}
