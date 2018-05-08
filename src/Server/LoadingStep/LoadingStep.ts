export default interface LoadingStep<Input, Output> {

    step(input: Input): Promise<Output>

}
