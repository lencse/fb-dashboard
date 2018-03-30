import Sandbox from './Sandbox/Sandbox'
import config from '../Config/config'
import GetPageInfo from './FacebookApi/GetPageInfo'
import Api from './FacebookApi/WebApi/Api'
import UrlGenerator from './FacebookApi/WebApi/UrlGenerator';

export function run() {
    const url = new UrlGenerator(config.facebookApi)
    const api = new Api(url)
    const pageInfo = new GetPageInfo(api)
    pageInfo.get('444.hu').then((page) => {
        console.info(page)
    })
}
