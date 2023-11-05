import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

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

    useEffect(() => {
        refetch()
    }, [])



    return {data, loading, error, refetch}
    
}

