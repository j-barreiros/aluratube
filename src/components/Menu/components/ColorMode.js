import React from 'react'

export const ColorModeContext = React.createContext({
    mode: "light",
    setMode: () => {'hello'},
    toggleMode: () => {'hello'}
});

export default function ColorModeProvider({ children, initialMode}) {
    
    const [mode, setMode] = React.useState(initialMode);
    
    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{mode:mode, setMode: setMode, toggleMode: toggleMode}}>
            {children}
        </ColorModeContext.Provider>
    )
}