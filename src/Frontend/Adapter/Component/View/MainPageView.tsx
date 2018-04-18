import * as React from 'react'
import MainPage from '../../../../Entity/Page/MainPage'
import PageInfo from '../../../../Entity/Page/PageInfo'
import Page from '../../../../Entity/Page/Page'

export default class MainPageView extends React.Component<{page: MainPage}, {}> {

    public render() {
        const page = this.props.page
        return (
            <div className='mdl-cell--4-col mdl-cell--4-col-phone'>
                <div className='page-title'>
                    <div className='pull-left'>
                        <img src={ page.info.profilePic } alt='' className='profile-pic' />
                    </div>
                    <div>
                        <div className='page-title'>{ page.info.name }</div>
                        <div>Utolsó poszt: { this.sinceLastPost(page) }</div>
                    </div>
                </div>
            </div>
        )
    }

    private sinceLastPost(page: Page): string {
        const h = Math.floor(page.minutesSinceLastPost / 60)
        const m = page.minutesSinceLastPost % 60

        return h > 0 ?
            `${h} ó ${m} perce` :
            `${m} perce`
    }

}
