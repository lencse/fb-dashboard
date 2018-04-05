import DataStore from '../../Entity/DataStore'

export default interface Loader {

    load(dataStore: DataStore): Promise<void>

}
