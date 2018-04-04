import DataLoader from '../Application/DataLoader'
import DataStore from '../../Entity/DataStore'

export default class ServerDataLoader implements DataLoader {

    public load(): Promise<DataStore> {
        return fetch('/api/v1/data')
            .then((response) => response.json())
            .then((data) => Promise.resolve(data))
    }

}
