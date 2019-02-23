import Koa from 'koa'
//import ip from 'ip'
import conf from './config'
import router from './router'
import middleware from './middleware'
import './mongodb'

const app = new Koa()
middleware(app)
router(app)
app.listen(conf.port, 'localhost',() => {
    console.log(`server is running at http://localhost:${conf.port}`)
})