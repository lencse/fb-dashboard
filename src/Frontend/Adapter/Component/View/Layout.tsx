import * as React from 'react'
import DataStore from '../../../../Entity/DataStore'

// export interface LayoutProps {

//     data:

// }

export default class Layout extends React.Component<{ data: DataStore }, {}> {

    public render() {
        return (
            <div className='mdl-layout mdl-js-layout'>
                <main className='mdl-layout__content mdl-color--grey-100'>
                </main>
            </div>
        )
    }

}
