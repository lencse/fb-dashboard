import Renderer from './Renderer'
import DataStore from '../../Entity/DataStore'
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
        this.loader.init((data: DataStore) => this.store.load(data))
    }

}
