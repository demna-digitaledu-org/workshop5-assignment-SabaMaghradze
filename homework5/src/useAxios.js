import axios from "axios";
import { useEffect, useState } from "react";

export const base = 'http://localhost:3001/';

const useAxios = (dynamic) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${base}${dynamic}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, setData, loading, error };
};

export default useAxios;