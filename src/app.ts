import dotenv from 'dotenv'
import server from './server'

dotenv.config()

import './config/database'

server()