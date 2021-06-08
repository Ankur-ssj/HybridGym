import React, {useState, useContext} from 'react';

const LoggedIn = React.createContext()
const updateLoggedIn = React.createContext()

export function useTheme(){
    console.log('reached read')
    return useContext(LoggedIn)
}

export function useThemeUpdate(){
    return useContext(updateLoggedIn)
}

export default function isLoggedIn ({children}){
    const [loggedIn, setLoggedIn] = useState(false)

    function toggleSignIn(){
        setLoggedIn(prevLoggedin => !prevLoggedin)
        console.log('toggle')
    }

    return(
        <LoggedIn.Provider value = {loggedIn}>
            <updateLoggedIn.Provider value = {toggleSignIn}>
                {children}
            </updateLoggedIn.Provider>
        </LoggedIn.Provider>
    )
}