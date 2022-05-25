import React from "react";
import {useRouter} from "next/router";

export default function ServerUrlForm() {

    const router = useRouter();
    const [serverUrl, setServerUrl] = React.useState('');

    const handleChange = setValue => e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        console.log('A name was submitted: ' + serverUrl);
        e.preventDefault();
        router.push({pathname: "/analyzer", query: {url: serverUrl}});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Server URL:
                <input type="url"
                       style={{width: '24rem'}}
                       autoFocus={true}
                       value={serverUrl}
                       onChange={handleChange(setServerUrl)}/>
            </label>
            <input type="submit" value="Analyze"/>
        </form>
    );
}
