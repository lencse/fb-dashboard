import { config as dotenvInit } from 'dotenv'

dotenvInit()

const config = {

    facebookApi: {
        token: process.env.FACEBOOK_API_TOKEN,
        url: 'https://graph.facebook.com',
        version: 'v2.12'
    }

}

export default config
