import React, { useContext } from "react"
import One from "./one"
import { RootContext } from "../rootContext"

const Child = React.memo(function ({ name, age }: { name: string, age: number }) {
    console.log('渲染了Child组件')
    return <>
        my name is :{name},age:{age}

        <One />
    </>
})
export default Child