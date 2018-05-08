import Clock from '../../../src/Server/Clock/Clock'

export default class MockClock implements Clock {

    private current: Date = new Date()

    public set(current: Date): void {
        this.current = current
    }

    public now(): Date {
        return this.current
    }

}
