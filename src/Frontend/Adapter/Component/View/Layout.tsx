import * as React from 'react'
import DataStore from '../../../../Entity/DataStore'
import MainPageView from './MainPageView'

export default class Layout extends React.Component<{ data: DataStore }, {}> {

    public render() {
        return (
            <div className='mdl-layout mdl-js-layout'>
                <main className='mdl-layout__content mdl-color--grey-100'>
                    <div className='mdl-grid'>
                        <MainPageView page={ this.props.data.mainPage } />
                        {
                            this.props.data.rivalPages.map(
                                (rivalPage) => <MainPageView page={ rivalPage } key={ rivalPage.info.slug } />
                            )
                        }
                    </div>
                </main>
            </div>
        )
    }

}
