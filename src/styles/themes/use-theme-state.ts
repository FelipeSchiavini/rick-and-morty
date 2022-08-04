import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { DefaultTheme } from 'styled-components'

type useThemeStateResponse = [
    state: DefaultTheme,
    setState: Dispatch<SetStateAction<DefaultTheme>>
]

const useThemeState = (initialState: DefaultTheme): useThemeStateResponse => {
    const theme = 'theme'
    const [state, setState] = useState(() => {
        const currentTheme = localStorage.getItem(theme)
        if(currentTheme) {
            return JSON.parse(currentTheme)
        }
        return initialState
    })
    
    useEffect(()=> {
        localStorage.setItem(theme, JSON.stringify(state))
    }, [state])

    return [state, setState]
}

export default useThemeState