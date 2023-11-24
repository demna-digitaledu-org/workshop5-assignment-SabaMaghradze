import axios from "axios";
import { useEffect, useState } from "react";

const base = 'http://localhost:3001/';

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

    const handleRemove = async (id) => {
        try {
            await axios.delete(`${base}${dynamic}/${id}`);
            setData(data.filter(item => {
                return item._id !== id;
            }));
        } catch (error) {
            console.error('Error deleting user:', error);
        }

        // internal server errors migdebs delete requestze.
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error, handleRemove };
};



export default useAxios;