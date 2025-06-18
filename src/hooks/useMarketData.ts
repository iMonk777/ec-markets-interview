import { useEffect, useState } from 'react'

const useMarketData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMarketData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://mock.apidog.com/m1/892843-874692-default/marketdata/history/AAPL'); // Replace with actual API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching market data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMarketData();
    }, [])

    return ({
        data,
        loading,
    })
}

export default useMarketData

