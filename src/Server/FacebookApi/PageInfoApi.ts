import PageInfo from '../../Entity/Page/PageInfo'
import Api from './WebApi/Api'

export default class PageInfoApi {

    constructor(private api: Api) {}

    public get(slug: string): Promise<PageInfo> {
        return this.api.call(
            `/${slug}`,
            {fields: 'picture{url},name,id,username'}
        ).then((responseData: any) => {
            return {
                name: responseData.name,
                id: responseData.id,
                slug,
                profilePic: responseData.picture.data.url
            }
        })
    }

}
