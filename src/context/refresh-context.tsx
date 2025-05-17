import { createContext, useContext, type Dispatch, type SetStateAction } from 'react'

export const RefreshContext = createContext({
    setRefreshTrigger: (() => { }) as Dispatch<SetStateAction<number>>,
})

export function useRefresh() {
    return useContext(RefreshContext)
}