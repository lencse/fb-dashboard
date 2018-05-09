import { suite, test } from 'mocha-typescript'
import MockApi from '../../src/Server/Adapter/FacebookApi/MockApi'
import PageInfoApi from '../../src/Server/FacebookApi/PageInfoApi'
import PageInfoStep from '../../src/Server/LoadingStep/PageInfoStep'
import CalculatedPageInfoStep from '../../src/Server/LoadingStep/CalculatedPageInfoStep'
import MockClock from './Mock/MockClock'
import PageInfo from '../../src/Server/Data/PageInfo'
import CalculatedPageInfo from '../../src/Server/Data/CalculatedPageInfo'

@suite
export default class LoadingTest {

    @test public async pageInfo() {
        const pageInfo = await this.testPageInfo()
        const calculatedPageInfo = await this.testCalculatedPageInfo(pageInfo)
    }

    private async testPageInfo(): Promise<PageInfo> {
        const api = new MockApi()
        const pageInfoApi = new PageInfoApi(api)
        const pageInfoStep = new PageInfoStep(pageInfoApi)
        const pageInfo = await pageInfoStep.step({ slug: '444.hu' })
        expect(pageInfo.slug).toBe('444.hu')
        expect(pageInfo.name).toBe('444')
        expect(pageInfo.lastPostDate).toEqual(new Date('2018-04-06T18:37:45.000Z'))
        return Promise.resolve(pageInfo)
    }

    private async testCalculatedPageInfo(pageInfo: PageInfo): Promise<CalculatedPageInfo> {
        const clock = new MockClock()
        clock.set(new Date('2018-04-06T19:41:22.000Z'))
        const calcuatedPageInfoStep = new CalculatedPageInfoStep(clock)
        const calculatedPageInfo = await calcuatedPageInfoStep.step(pageInfo)
        expect(calculatedPageInfo.slug).toBe('444.hu')
        expect(calculatedPageInfo.name).toBe('444')
        expect(calculatedPageInfo.minutesSinceLastPost).toBe(63)
        return Promise.resolve(calculatedPageInfo)
    }

}
