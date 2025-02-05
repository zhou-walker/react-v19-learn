'use client'
import { useEffect, useState } from "react";
import Child from "./components/child";
import One from "./components/one";
import { RootContext } from './rootContext'


export default function Index() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setIndex(1000000000)
        }, 3000)
    }, [index])
    return <>
        <RootContext.Provider value={index}>
            {
                index
            }
            <button onClick={() => setIndex(index + 1)}>
                +1
            </button>
        </RootContext.Provider>


    </ >
}