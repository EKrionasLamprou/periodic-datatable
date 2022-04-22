export interface Observer {
    observer: object,
    handle: (params: any) => void,
}