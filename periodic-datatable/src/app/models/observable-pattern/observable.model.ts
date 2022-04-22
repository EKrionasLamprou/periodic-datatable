import { Observer } from "./observer.model"

export abstract class Observable {

    constructor(params: () => any) {
        this.params = params
    }

    protected params: () => any

    protected observers: Observer[] = new Array()

    public subscribe = (observer: object, handle: (params: any) => void) =>
        this.observers.push({observer, handle})

    public unsubscribe = (component: object) =>
        this.observers = this.observers.filter(o => o.observer !== component)
    
    protected notifyObservers = (): void =>
        this.observers.forEach(sub => sub.handle(this.params()))
}