import config from '../../config/server'
import Dic from './DependencyInjection/Dic'

export function run() {
    const dic = new Dic(config)
    const app = dic.getApplication()
    app.run()
}
