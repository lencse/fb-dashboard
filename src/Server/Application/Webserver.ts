import DataStore from '../../Entity/DataStore'

export default interface Webserver {

    dataStore(path: string, store: () => DataStore): void

}
