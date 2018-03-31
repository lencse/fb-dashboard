export default interface Api {

    call(path: string, params: any): Promise<any>

}
