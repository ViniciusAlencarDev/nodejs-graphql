
import { getLengthMessage } from '.';

describe('Should be return length message', () => {
    test('Message', () => {
        expect(getLengthMessage('Hello World')).toBe(11)
    })
})
