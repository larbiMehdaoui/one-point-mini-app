import {PERSIST_DATA} from "../types";

const dataPersistToLocalStorage = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            if (action.type === PERSIST_DATA) {
                const state = store.getState()
                localStorage.setItem('@data-list', JSON.stringify(state.dataList))
            }
            next(action)
        }
    }
}


export {
    dataPersistToLocalStorage
}