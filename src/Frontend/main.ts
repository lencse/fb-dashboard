import Dic from './DependencyInjection/Dic'

const dic = new Dic()
const frontend = dic.getFrontend()

frontend.run()
