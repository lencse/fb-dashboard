import { suite, test, slow, timeout, skip, only } from 'mocha-typescript'
import { assert } from 'chai'

@suite class BackendTest {

    @test public first() {
        assert.equal(1, 1)
    }

}
