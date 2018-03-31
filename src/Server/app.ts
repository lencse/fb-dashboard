import config from '../Config/config'
import GetPageInfo from './FacebookApi/GetPageInfo'
import Api from './FacebookApi/WebApi/Api'
import UrlGenerator from './FacebookApi/WebApi/UrlGenerator'
import AxiosWeb from './Adapter/FacebookApi/AxiosWeb'
import WebApi from './FacebookApi/WebApi/WebApi'

export function run() {
    const url = new UrlGenerator(config.facebookApi)
    const web = new AxiosWeb()
    const api = new WebApi(url, web)
    const pageInfo = new GetPageInfo(api)
    pageInfo.get('444.hu').then((page) => {
        console.info(page)
    })
}
