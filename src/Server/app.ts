import config from '../Config/config'
import GetPageInfo from './FacebookApi/GetPageInfo'
import Api from './FacebookApi/WebApi/Api'
import UrlGenerator from './FacebookApi/WebApi/UrlGenerator'
import AxiosWeb from './Adapter/FacebookApi/AxiosWeb'
import WebApi from './Adapter/FacebookApi/WebApi'
import MockApi from './Adapter/FacebookApi/MockApi'
import Dic from './DependencyInjection/Dic'

export function run() {
    const dic = new Dic(config)
    const pageInfo = dic.getGetPageInfo()
    pageInfo.get('444.hu').then((page) => {
        console.info(page)
    })
    pageInfo.get('indexhu').then((page) => {
        console.info(page)
    })
    pageInfo.get('hvghu').then((page) => {
        console.info(page)
    })
    // pageInfo.get('officialknows').then((page) => {
    //     console.info(page)
    // })
    // pageInfo.get('ladygaga').then((page) => {
    //     console.info(page)
    // })
}
