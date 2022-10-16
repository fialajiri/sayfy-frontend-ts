import {setupServer} from 'msw/node'
import { galleryRoutesHandlers } from './handlers/mock-gallery-route'

export const server = setupServer(
    ...galleryRoutesHandlers
)

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})

