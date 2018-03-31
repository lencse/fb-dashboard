import Page from '../../Entity/Page/Page'
import Api from './WebApi/Api'

export default class GetPageInfo {

    constructor(private api: Api) {}

    public get(slug: string): Promise<Page> {
        return this.api.call(
            `/${slug}`,
            {fields: 'picture{url},name,id,username'}
        ).then((responseData: any) => {
            return {
                name: responseData.name,
                id: responseData.id,
                slug: responseData.username,
                profilePic: responseData.picture.data.url
            }
        })
    }

}
