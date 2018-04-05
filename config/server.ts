import { config as dotenvInit } from 'dotenv'
import AppConfig from '../src/Server/Config/Definition/AppConfig'

dotenvInit()

const config: AppConfig = {
    facebookApi: {
        token: process.env.FACEBOOK_API_TOKEN,
        url: 'https://graph.facebook.com',
        version: 'v2.12'
    },

    mock: 'true' === process.env.MOCK,

    pages: {
        main: { slug: '444.hu' },
        rivals: [
            { slug: 'indexhu' },
            { slug: 'hvghu' }
        ]
    },

    port: Number.parseInt(process.env.PORT)

}

export default config
