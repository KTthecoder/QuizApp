import { useEffect, useState } from "react"
import GetCookie from "../components/GetCookie";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const csrftoken = GetCookie('csrftoken');
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }
        })
        .then(res => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])

    return [data, error]
}

export default useFetch