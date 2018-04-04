import DataStore from '../../Entity/DataStore'

export default interface DataLoader {

    load(): Promise<DataStore>

}
