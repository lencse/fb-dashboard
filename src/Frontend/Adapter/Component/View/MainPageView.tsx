import * as React from 'react'
import MainPage from '../../../../Entity/Page/MainPage'
import PageInfo from '../../../../Entity/Page/PageInfo'

export default class MainPageView extends React.Component<{page: MainPage}, {}> {

    public render() {
        const info = this.props.page.info
        return (
            <div className='mdl-cell--4-col mdl-cell--4-col-phone'>
                <div className='page-title'>
                    <div className='pull-left'>
                        <img src={ info.profilePic } alt='' className='profile-pic' />
                    </div>
                    <div>
                        <div className='page-title'>{ info.name }</div>
                        <div>Utolsó poszt: { this.sinceLastPost(info) } perce</div>
                    </div>
                </div>
            </div>
        )
    }

    private sinceLastPost(info: PageInfo): string {
        const mins = Math.floor((new Date().getTime() - new Date(info.lastPostDate).getTime()) / 1000 / 60)
        const h = Math.floor(mins / 60)
        const m = mins % 60

        return [(h < 10 ? '0' : '') + h,  (m < 10 ? '0' : '') + m].join(':')
    }

}
