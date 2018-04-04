import DataLoader from '../Application/DataLoader'
import DataStore from '../../Entity/DataStore'

export default class ServerDataLoader implements DataLoader {

    constructor(
        private intervalSec: number
    ) {}

    public init(onLoad: (data: DataStore) => void): void {
        this.load(onLoad)
        setInterval(
            () => this.load(onLoad),
            this.intervalSec * 1000
        )
    }

    private load(onLoad: (data: DataStore) => void): void {
        fetch('/api/v1/data')
            .then((response) => response.json())
            .then((data) => Promise.resolve(data))
            .then((result) => onLoad(result))
    }

}
