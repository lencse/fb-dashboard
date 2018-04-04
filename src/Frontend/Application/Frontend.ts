import Renderer from './Renderer'
import DataStore from '../../Entity/DataStore'
import Store from '../../Entity/Store'
import DataLoader from './DataLoader'
import { FrontendStore } from '../Store/FrontendStore'

export default class Frontend {

    constructor(
        private renderer: Renderer,
        private loader: DataLoader,
        private store: FrontendStore
    ) {}

    public run(): void {
        this.renderer.attach()
        this.loader.load().then((data) => {
            this.store.load(data)
        })
    }

}
