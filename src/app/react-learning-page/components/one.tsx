import { JSX } from "react";
import Child from "./child";

export default function One(props: JSX.IntrinsicAttributes & { name: string; age: number; }) {

    return <>
        <Child {...props} />
    </>
}