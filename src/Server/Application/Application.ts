import DataStore from '../../Entity/DataStore'
import Loader from '../Loader/Loader'
import Webserver from './Webserver'
import Store from '../../Entity/Store'

export default class Application {

    private dataStore: DataStore = Store.default()

    constructor(
        private loaders: Loader[],
        private webserver: Webserver
    ) {}

    public run(): void {
        this.loaders.map((loader) => loader.load(this.dataStore))
        this.webserver.dataStore('/api/v1/data', () => this.dataStore)
        this.webserver.static('public')
    }

}
