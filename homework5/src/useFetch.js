import { useState, useEffect } from 'react';
import axios from 'axios';



const useFetch = (url) => {

    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            if (response.status < 200 || response.status >= 300) {
                setIsLoading(false);
                setIsError(true);
                return;
            };
            const data = response.data;
            setInfo(data);
            setIsLoading(false);
        } catch (error) {
            setIsError(true);
            console.log(`Error: ${error}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    };

    if (isError) {
        return <h1>An error occurred</h1>;
    };

    console.log(info);

    return { data: info, isLoading, isError };
};

export default useFetch;