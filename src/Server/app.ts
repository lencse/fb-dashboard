import config from '../Config/config'

import Dic from './DependencyInjection/Dic'

export function run() {
    const dic = new Dic(config)
    const pageInfo = dic.getPageInfoApi()
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
