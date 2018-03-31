import config from './Config/config'
import Dic from './DependencyInjection/Dic'

export function run() {
    const dic = new Dic(config)
    const app = dic.getApplication()
    app.run()
}
