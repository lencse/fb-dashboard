import Sandbox from './Sandbox/Sandbox'
import config from '../Config/config'
import GetPageInfo from './FacebookApi/GetPageInfo'
import Api from './FacebookApi/Api'

export function run() {
    const pageInfo = new GetPageInfo(new Api(
        config.facebookApi.url,
        config.facebookApi.version,
        config.facebookApi.token
    ))
    pageInfo.get('444.hu').then((page) => {
        console.info(page)
    })
}
