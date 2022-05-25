import React, {useEffect} from "react";
import Link from 'next/link';

export default function Analyzer() {

    let ws = null;
    const queryParams = new URLSearchParams(window.location.search);
    const url = queryParams.get('url');

    useEffect(() => {
        console.log("Connecting to websocket..." + url);
        if (url.empty) {
            return;
        }
        ws = new WebSocket(url);
        ws.binaryType = "arraybuffer"

        ws.onopen = () => {
            console.log("Websocket connected to server");
        }

        ws.onmessage = (event) => {
            console.log("Received " + event.data.byteLength + " bytes");
                console.log(event.data);
        }

        // return () => {
        //     if (ws) {
        //         console.log("Closing websocket");
        //         ws.close();
        //         ws = null;
        //     }
        // };
    }, []);

    return (
        <>
            <h1>Websocket Analyzer</h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </>
    )
}