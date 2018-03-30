import axios from 'axios'

export default class Sandbox {

    public run(): void {
        const token = 'EAACEdEose0cBAHrI2PPtTdh6YOZCtFnWAOvmN0JdfcMgrmXmrUclA2CRZBJKE4Ir1msCSkVcoGyBCsc8bRVv75cDPWH1ZAxLEZChwpsBuor0Vbw7nrBqbIZBnTi8FlxqEC6stikGgL6ghWtmDP1R4TFdpQsfCKZAZA6FSYZAaZC56LGsp9iZBr0sYZC39eiZCz4wP8MZD'

        axios.get(`https://graph.facebook.com/v2.12/hvghu/posts?access_token=${token}`).then((response) => {
            response.data.data.map((post) => {
                axios.get(`https://graph.facebook.com/v2.12/${post.id}/?access_token=${token}&fields=description,link`).then((response2) => {
                    console.info(response2.data)
                })
            })
        })
    }

}
