import useSWR from "swr";
import axios from 'axios'

export const SwrUtils = (url) => {
    const fetcher = (url) =>
        axios
            .get(url, {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_G2U_API_KEY
                }
            })
            .then((res) => res.data);
    const { data, error, mutate, isLoading, isValidating } = useSWR(url, fetcher, {
        revalidateOnFocus: true,
        // revalidateOnMount: false,
        // revalidateOnReconnect: false,
        // refreshWhenOffline: false,
        // refreshWhenHidden: false,
        refreshInterval: 2000
    })
    return {
        data,
        isLoading: !error && !data,
        isError: error,
        mutate
    }
}


