/**
 * Represents an object that can 'observe' the behaviour of an observable. The observable
 * may call the handle method to pass data to the observer.
 */
export interface Observer {
    /**
     * A method to be called by an observable and pass any value to the observer.
     */
    handle(value: any): any
}