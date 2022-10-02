import React from "react";
import {StoreType} from "./types";




export const StoreContext = React.createContext<StoreType>({} as StoreType)

export type ProviderTypes = {
    store:StoreType
    children:React.ReactNode
}
export const Provider = (props:ProviderTypes) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
