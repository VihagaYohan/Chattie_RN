import React, { Component, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function useTheme(defaultValue) {
    const [mode, setMode] = useState(defaultValue)
    const store = useSelector(state => state.theme)


    useEffect(()=>{
        
    },[])

    return [mode, setMode]
}

export default useTheme ;