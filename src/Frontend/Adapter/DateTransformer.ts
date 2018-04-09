import { assign } from 'lodash'

export default class DateTransformer {

    public transform(data: any): any {
        for (const key in data) {
            const value = data[key]
            if ('object' === typeof value) {
                data[key] = this.transform(value)
            }
            if (/.+Date$/.test(key)) {
                const date = new Date(value)
                data[key] = date
            }
        }
        return data
    }

}
