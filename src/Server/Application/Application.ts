import DataStore from '../../Entity/DataStore'
import MainPageInfoLoader from '../Loader/MainPageInfoLoader'

export default class Application {

    private dataStore = new DataStore()

    constructor(
        private mainPageInfoLoader: MainPageInfoLoader
    ) {}

    public run(): void {
        this.mainPageInfoLoader.load(this.dataStore).then((store) => {
            this.dataStore = store
        })
    }

}
