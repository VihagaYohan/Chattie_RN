import React, { Component, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function useTheme(defaultValue="light-mode") {
    const [mode, setMode] = useState(defaultValue)
    const {theme} = useSelector(state => state.theme)

    useEffect(()=>{
        setMode(theme)
    },[])

    return [mode, setMode]
}

export default useTheme ;