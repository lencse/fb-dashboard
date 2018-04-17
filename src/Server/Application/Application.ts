import DataStore from '../../Entity/DataStore'
import Loader from '../Loader/Loader'
import Webserver from './Webserver'
import Store from '../../Entity/Store'
import Transformer from '../Transformer/Transformer'

export default class Application {

    private dataStore: DataStore = Store.default()

    constructor(
        private loaders: Loader[],
        private transformers: Transformer[],
        private webserver: Webserver,
        private refreshIntervalSec: number
    ) {}

    public run(): void {
        this.load()
        setInterval(
            () => this.load(),
            this.refreshIntervalSec * 1000
        )
        this.startServer()
    }

    private load(): void {
        this.loaders.map((loader) => loader.load(this.dataStore).then(() => {
            this.transformers.map((transformer) => transformer.transform(this.dataStore))
        }))
    }

    private startServer(): void {
        this.webserver.dataStore('/api/v1/data', () => this.dataStore)
        this.webserver.static('public')
    }

}
