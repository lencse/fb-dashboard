import axios from 'axios'

export default class Sandbox {

    public run(): void {
        const token = 'EAACEdEose0cBAD3ZAUjhB3t7oqvq6Or5ZBX3bAtgYBpJukmA47ogPTKTSMZCNjZAPSqhHh6h3EPiPHwrjFvSuPkGihbQLl5vqpFEwePTP99Dlm405MjZBwhZAHWLMGexLReJ5qTOfWMYrVRc5kghGchMcdD3Kffn8y4onahnZA4ZA8mMZBOJqUGd6h9A41LkP0lAZD'

        axios.get(`https://graph.facebook.com/v2.12/hvghu/posts?access_token=${token}`).then((response) => {
            response.data.data.map((post) => {
                axios.get(`https://graph.facebook.com/v2.12/${post.id}/?access_token=${token}&fields=description,link`).then((response2) => {
                    console.info(response2.data)
                })
            })
        })
    }

}
