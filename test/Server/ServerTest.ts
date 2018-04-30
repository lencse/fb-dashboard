import { suite, test } from 'mocha-typescript'
import UrlGenerator from '../../src/Server/FacebookApi/WebApi/UrlGenerator'
import MockWeb from './Mock/MockWeb'
import WebApi from '../../src/Server/Adapter/FacebookApi/WebApi'
import MockApi from '../../src/Server/Adapter/FacebookApi/MockApi'
import PageInfoApi from '../../src/Server/FacebookApi/PageInfoApi'
import MainPageInfoLoader from '../../src/Server/Loader/MainPageInfoLoader'
import Store from '../../src/Entity/Store'
import RivalPagesInfoLoader from '../../src/Server/Loader/RivalPagesInfoLoader'

@suite
export default class ServerTest {

    @test public urlGenerator() {
        const generator = new UrlGenerator({
            url: 'https://test.com',
            version: 'v1.0',
            token: 'TEST'
        })
        const url = generator.getUrl('/test', { param1: 'foo', param2: 'bar' })
        expect(url).toBe('https://test.com/v1.0/test?param1=foo&param2=bar&access_token=TEST')
    }

    @test public webApi() {
        expect.assertions(1)
        const generator = new UrlGenerator({
            url: 'https://test.com',
            version: 'v1.0',
            token: 'TEST'
        })
        const web = new MockWeb()
        const api = new WebApi(generator, web)
        return api.call('/test', { param1: 'foo', param2: 'bar' }).then((data) => {
            expect(data.test).toBe(1)
        })
    }

    @test public pageInfoApi() {
        expect.assertions(3)
        const api = new MockApi()
        const getPageInfo = new PageInfoApi(api)
        return getPageInfo.get('444.hu').then((page) => {
            expect(page.slug).toBe('444.hu')
            expect(page.name).toBe('444')
            expect(page.lastPostDate).toEqual(new Date('2018-04-06T18:37:45.000Z'))
        })
    }

    @test public mainPageInfoLoader() {
        expect.assertions(1)
        const api = new MockApi()
        const getPageInfo = new PageInfoApi(api)
        const loader = new MainPageInfoLoader('444.hu', getPageInfo)
        const store = Store.default()
        return loader.load(store).then(() => {
           expect(store.mainPage.info.name).toBe('444')
        })
    }

    @test public rivalPagesInfoLoader() {
        expect.assertions(1)
        const api = new MockApi()
        const getPageInfo = new PageInfoApi(api)
        const loader = new RivalPagesInfoLoader([{slug: 'indexhu'}, { slug: 'hvghu' }], getPageInfo)
        const store = Store.default()
        return loader.load(store).then(() => {
           expect(store.rivalPages.length).toBe(2)
        })
    }

}
