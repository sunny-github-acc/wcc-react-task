import { useState, useEffect, useCallback } from 'react';
import { debounce } from "lodash"

const useFetch = (input) => {
    const [data, setData] = useState(false);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);
    const handleMovies = useCallback(debounce((input) => getMovies(input), 200), []);

    const getMovies = async (input) => {
    let data = false;
        
    setError(null);

    if (input.length > 2) {
        let timeout = setTimeout(() => {
            setIsPending(true);
        }, 500); 

        data = await fetchMovies(input);

        clearTimeout(timeout);
        setIsPending(false);
    }

    setData(data); 
    }

    const fetchMovies = async (input) => {
        try {
            const result = await fetch("https://api.themoviedb.org/3/search/movie?api_key=7e9221d5edd3d84c33957b05bcec9848&language=en-US&query=" + input);
            const data = await result.json();

            if (data.results == "") return [""];
            
            return data.results;
        } catch(error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        handleMovies(input);
    }, [input])

    return { data, isPending, error };
}
 
export default useFetch;