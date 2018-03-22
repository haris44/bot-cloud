import Hapi from 'hapi'
import * as fs from 'fs'
import Joi from 'joi'
import moment from 'moment'

const server = Hapi.Server({
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 8888
})


server.route({
    method: 'PUT',
    path: '/',
    config: {
        cors: true,
        handler: (request) => {
            const $message = request.payload
            const result = "J'aime le cloud"
            const newMessage = Object.assign($message.message, { content: result })
            const newIntentMessage = Object.assign($message, { message: newMessage })
            return newIntentMessage

        }
    }
})



server.start()


server.events.on('start', (route) => {
    console.log('Server started', server.info.port, server.info.host)
})