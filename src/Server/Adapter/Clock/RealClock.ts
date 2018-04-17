import Clock from '../../Clock/Clock'

export default class RealClock implements Clock {

    public now(): Date {
        return new Date()
    }

}
