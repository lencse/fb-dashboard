import DataLoader from '../Application/DataLoader'
import DataStore from '../../Entity/DataStore'
import DateTransformer from './DateTransformer'

export default class ServerDataLoader implements DataLoader {

    constructor(
        private dateTransformer: DateTransformer,
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
            .then((result) => this.dateTransformer.transform(result))
            .then((result) => onLoad(result))
    }

}
