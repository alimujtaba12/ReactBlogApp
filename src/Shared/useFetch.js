import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch(url).then(Response => {
                return Response.json()
            }).then(data => {
                setData(data);
                setLoading(false)
            })
        }, 500);
    }, [url])
    return { data, isLoading }
}

export default useFetch

