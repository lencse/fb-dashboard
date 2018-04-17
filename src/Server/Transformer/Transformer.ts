import DataStore from '../../Entity/DataStore'

export default interface Transformer {

    transform(dataStore: DataStore): void

}
