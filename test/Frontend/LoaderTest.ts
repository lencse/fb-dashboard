import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'
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
        assert.equal('Test', transformed.something)
        assert.equal('object', typeof transformed.testDate)
        assert.equal('Date', transformed.testDate.constructor.name)
        assert.equal(2018, transformed.testDate.getFullYear())
        assert.equal('Test', transformed.obj.something)
        assert.equal('Date', transformed.obj.otherDate.constructor.name)
        assert.equal('Date', transformed.obj.arr[0].aDate.constructor.name)
        assert.equal('Date', transformed.obj.arr[1].aDate.constructor.name)
    }

}
