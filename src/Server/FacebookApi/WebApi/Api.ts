import Axios from 'axios'
import UrlGenerator from './UrlGenerator'

export default class Api {

    constructor(
        private url: UrlGenerator
    ) {}

    public call(path: string, params: any): Promise<any> {
        const url = this.url.getUrl(path, params)
        return Axios.get(url)
            .then((response) => response.data)
            .catch((reason) => console.error(reason))
    }

}
