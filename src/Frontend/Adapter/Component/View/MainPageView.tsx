import * as React from 'react'
import MainPage from '../../../../Entity/Page/MainPage'

export default class MainPageView extends React.Component<{page: MainPage}, {}> {

    public render() {
        const info = this.props.page.info
        return (
            <div className='mdl-cell--4-col mdl-cell--4-col-phone'>
                <h2>
                    <img src={ info.profilePic } alt='' className='profile-pic' />
                    { info.name }
                </h2>
            </div>
        )
    }

}
