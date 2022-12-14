import express from 'express'
import routes from './controllers'
import loggerMiddleware from './config/logger'
import { errors } from 'celebrate'

export default function Server() {
    const app  = express()
    app.use(express.json())
    app.use(loggerMiddleware)
    
    for(let route of routes) {
        app.use(route.path, route.routes)
    }
    
    app.use(errors())
    const port = process.env.DEFAULT_PORT
    
    app.listen(port, function() {
        console.log('running the server on port', port);
    })
}