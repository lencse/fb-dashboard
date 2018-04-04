import DataStore from './DataStore'

export default class Store {

    public static default(): DataStore {
        return {
            mainPage: {
                info: {
                    slug: '',
                    id: '',
                    name: '',
                    profilePic: ''
                }
            }
        }
    }

}
