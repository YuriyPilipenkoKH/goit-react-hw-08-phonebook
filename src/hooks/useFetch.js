import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    
    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then(respomse => {
            setData(respomse.data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [url])
    
    const refetch = () => {
        setLoading(true)
        axios.get(url)
        .then(respomse => {
            setData(respomse.data)
        })
        .catch((err) => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }


    return {data, loading, error, refetch}
    
}

