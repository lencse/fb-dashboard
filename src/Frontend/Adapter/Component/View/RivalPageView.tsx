import * as React from 'react'
import MainPage from '../../../../Entity/Page/MainPage'

export default class RivalPageView extends React.Component<{page: MainPage}, {}> {

    public render() {
        const info = this.props.page.info
        return (
            <div className='mdl-card mdl-shadow--2dp'>
                <div className='mdl-card__title'>
                    <h2 className='mdl-card__title-text'>
                        <img src={ info.profilePic } alt='' className='profile-pic' />
                        { info.name }
                    </h2>
                </div>
                <div className='mdl-card__supporting-text'>
                </div>
            </div>
        )
    }

}
