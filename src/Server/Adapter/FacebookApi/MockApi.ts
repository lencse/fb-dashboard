import Api from '../../FacebookApi/WebApi/Api'
import data from './mock/data'

export default class MockApi implements Api {

    public call(path: string, params: any): Promise<any> {
        const matched = data.filter((answer) => {
            if (answer.path !== path) {
                return false
            }
            let match = true
            Object.keys(params).forEach((key) => {
                if (answer.params[key] !== params[key]) {
                    match = false
                }
            })
            Object.keys(answer.params).forEach((key) => {
                if (answer.params[key] !== params[key]) {
                    match = false
                }
            })
            return match
        }).pop()

        return Promise.resolve(matched.response)
    }

}
