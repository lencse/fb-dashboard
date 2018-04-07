import PagesConfig from './PagesConfig'
import ApiConfig from '../../FacebookApi/WebApi/ApiConfig'

export default interface AppConfig {

    facebookApi: ApiConfig

    mock: boolean

    pages: PagesConfig

    port: number

    refreshIntervalSec: number

}
