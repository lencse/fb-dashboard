import Renderer from '../Application/Renderer'
import DataLoader from '../Application/DataLoader'
import ReactRenderer from '../Adapter/ReactRenderer'
import ServerDataLoader from '../Adapter/ServerDataLoader'
import Frontend from '../Application/Frontend'
import { frontendStore } from '../Store/FrontendStore'

// tslint:disable:member-ordering

export default class Dic {

    private renderer: Renderer
    public getRenderer(): Renderer {
        return this.renderer ?
            this.renderer :
            this.renderer = new ReactRenderer()
    }

    private dataLoader: DataLoader
    public getDataLoader(): DataLoader {
        return this.dataLoader ?
            this.dataLoader :
            this.dataLoader = new ServerDataLoader()
    }

    private frontend: Frontend
    public getFrontend(): Frontend {
        return this.frontend ?
            this.frontend :
            this.frontend = new Frontend(this.getRenderer(), this.getDataLoader(), frontendStore)
    }

}
