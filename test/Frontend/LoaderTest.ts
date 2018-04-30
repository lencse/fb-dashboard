import { suite, test } from 'mocha-typescript'
import DateTransformer from '../../src/Frontend/Adapter/DateTransformer'

@suite
export default class LoaderTest {

    @test public dateTransformer() {
        const transformer = new DateTransformer()
        const data = {
            something: 'Test',
            testDate: '2018-04-06T18:50:00+0000',
            obj: {
                something: 'Test',
                otherDate: '2018-04-06T18:50:00+0000',
                arr: [
                    {
                        aDate: '2018-04-06T18:50:00+0000'
                    }, {
                        aDate: '2018-04-06T18:50:00+0000'
                    }
                ]
            }
        }
        const transformed = transformer.transform(data)
        expect(transformed.something).toBe('Test')
        expect(typeof transformed.testDate).toBe('object')
        expect(transformed.testDate.constructor.name).toBe('Date')
        expect(transformed.testDate.getFullYear()).toBe(2018)
        expect(transformed.obj.something).toBe('Test')
        expect(transformed.obj.otherDate.constructor.name).toBe('Date')
        expect(transformed.obj.arr[0].aDate.constructor.name).toBe('Date')
        expect(transformed.obj.arr[1].aDate.constructor.name).toBe('Date')
    }

}
