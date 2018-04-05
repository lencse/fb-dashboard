import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'
import UrlGenerator from '../../src/Server/FacebookApi/WebApi/UrlGenerator'
import MockWeb from './Mock/MockWeb'
import WebApi from '../../src/Server/Adapter/FacebookApi/WebApi'
import MockApi from '../../src/Server/Adapter/FacebookApi/MockApi'
import PageInfoApi from '../../src/Server/FacebookApi/PageInfoApi'
import MainPageInfoLoader from '../../src/Server/Loader/MainPageInfoLoader'
import RivalPagesInfoLoader from '../../src/Server/Loader/RivalPagesInfoLoader'
import Store from '../../src/Entity/Store'

@suite
export default class ApiTest {

    @test public urlGenerator() {
        const generator = new UrlGenerator({
            url: 'https://test.com',
            version: 'v1.0',
            token: 'TEST'
        })
        const url = generator.getUrl('/test', { param1: 'foo', param2: 'bar' })
        assert.equal('https://test.com/v1.0/test?param1=foo&param2=bar&access_token=TEST', url)
    }

    @test public webApi() {
        const generator = new UrlGenerator({
            url: 'https://test.com',
            version: 'v1.0',
            token: 'TEST'
        })
        const web = new MockWeb()
        const api = new WebApi(generator, web)
        api.call('/test', { param1: 'foo', param2: 'bar' }).then((data) => {
            assert.equal(1, data.test)
        })
    }

    @test public pageInfoApi() {
        const api = new MockApi()
        const getPageInfo = new PageInfoApi(api)
        getPageInfo.get('444.hu').then((page) => {
            assert.equal('444.hu', page.slug)
            assert.equal('444', page.name)
        })
    }

    @test public mainPageInfoLoader() {
        const api = new MockApi()
        const getPageInfo = new PageInfoApi(api)
        const loader = new MainPageInfoLoader('444.hu', getPageInfo)
        const store = Store.default()
        loader.load(store).then(() => {
            assert.equal('444', store.mainPage.info.name)
        })
    }

    @test public rivalPagesInfoLoader() {
        const api = new MockApi()
        const getPageInfo = new PageInfoApi(api)
        const loader = new RivalPagesInfoLoader([{slug: 'indexhu'}, { slug: 'hvghu' }], getPageInfo)
        const store = Store.default()
        loader.load(store).then(() => {
            assert.equal(2, store.rivalPages.length)
        })
    }

}
