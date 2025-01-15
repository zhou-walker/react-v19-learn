'use client'
import { useState } from "react";
import Child from "./components/child";


export default function Index() {
    const [one, setOne] = useState(0)
    const [two, setTwo] = useState(0)
    const [three, setThree] = useState(0)
    const [four, setFour] = useState(0)
    return <>
        <div
            style={{
                height: 100,
                backgroundColor: 'red',
                display: "flex",
                alignItems: 'center'
            }}
            onClickCapture={() => {
                console.log('你点击了 toolbar ！');
            }}>
            <button onClickCapture={(e) => {
                setOne(one + 1)
            }
            }>
                {one}
            </button>
            <button onClick={(e) => {
                setTwo(two + 1)
            }
            }>
                {two}
            </button>
            <button onClick={(e) => {
                setThree(three + 1)
            }
            }>
                {three}
            </button>
            <button onClick={(e) => {
                setFour(four + 1)
            }
            }>
                {four}
            </button>
        </div>

    </>
}