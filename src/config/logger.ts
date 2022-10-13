import morgan from 'morgan'
// @TODO add custom config
const loggerMiddleware = morgan('tiny')

export default loggerMiddleware