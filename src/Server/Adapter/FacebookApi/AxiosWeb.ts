import Axios from 'axios'
import Web from '../../FacebookApi/WebApi/Web'

export default class AxiosWeb implements Web {

    public get(url: string): Promise<any> {
        return Axios.get(url)
            .then((response) => response.data)
            .catch((reason) => console.error(reason))
    }

}
