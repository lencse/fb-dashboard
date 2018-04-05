import Dic from './DependencyInjection/Dic'
import config from '../../config/frontend'

const dic = new Dic(config)
const frontend = dic.getFrontend()

frontend.run()
