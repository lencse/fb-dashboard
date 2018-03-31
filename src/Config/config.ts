import { config as dotenvInit } from 'dotenv'
import AppConfig from './AppConfig'

dotenvInit()

const config: AppConfig = {

    facebookApi: {
        token: process.env.FACEBOOK_API_TOKEN,
        url: 'https://graph.facebook.com',
        version: 'v2.12'
    },

    mock: 'true' === process.env.MOCK

}

export default config
