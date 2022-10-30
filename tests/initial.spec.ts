describe('jest test configuration', () => {
    test('should run a message in the console', () => {
        const message = 'running jest with success'

        expect(message).toBe('running jest with success')
    })
})