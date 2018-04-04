import Dic from './DependencyInjection/Dic'
import config from './Config/config'

const dic = new Dic(config)
const frontend = dic.getFrontend()

frontend.run()
