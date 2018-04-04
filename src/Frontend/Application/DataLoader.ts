import DataStore from '../../Entity/DataStore'

export default interface DataLoader {

    init(onLoad: (data: DataStore) => void): void

}
