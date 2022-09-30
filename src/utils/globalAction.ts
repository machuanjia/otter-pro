export class Actions {
    emptyFunc () {
        console.warn(' Global action is empty!')
    }
    constructor(emptyFunc?: () => void) {
        if(emptyFunc) {
            this.emptyFunc = emptyFunc
        }
    }
    actions = {
        permissionsList: [],
        onGlobalStateChange: () => this.emptyFunc(),
        setGlobalState: () => this.emptyFunc(),
    }
    setActions(actions: any) {
        this.actions = actions
    }
    onGlobalStateChange(...args: any[]) {
        // @ts-ignore
        return this.actions.onGlobalStateChange(...args)
    }
    setGlobalState(...args: any[]) {
        // @ts-ignore
        return this.actions.setGlobalState(...args)
    }
}