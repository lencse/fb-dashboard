import Web from '../../../src/Server/FacebookApi/WebApi/Web'

export default class MockWeb implements Web {

    public get(url: string): Promise<any> {
        if ('https://test.com/v1.0/test?param1=foo&param2=bar&access_token=TEST' === url) {
            return Promise.resolve({test: 1})
        }
    }

}
