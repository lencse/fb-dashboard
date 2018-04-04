import * as React from 'react'
import Layout from './View/Layout'
import DataStore from '../../../Entity/DataStore'
import { FrontendStore, StoreSubscriber, frontendStore } from '../../Store/FrontendStore'

export default class Main extends React.Component<{}, DataStore> implements StoreSubscriber {

    constructor(props, context) {
        super(props, context)
        frontendStore.subscribe(this)
    }

    public render() {
        return (
            <Layout />
        )
    }

    public init(initial: DataStore): void {
        this.state = initial
    }
    public update(updated: DataStore): void {
        this.setState(updated)
    }

}
