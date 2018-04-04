import Store from '../../Entity/Store'
import DataStore from '../../Entity/DataStore'

export interface StoreSubscriber {

    init(initial: DataStore): void

    update(updated: DataStore): void

}

export class FrontendStore {

    private subscriber: StoreSubscriber

    public subscribe(subscriber: StoreSubscriber): void {
        this.subscriber = subscriber
        this.subscriber.init(Store.default())
    }

    public load(data: DataStore): void {
        this.subscriber.update(data)
    }

}

export const frontendStore: FrontendStore = new FrontendStore()
