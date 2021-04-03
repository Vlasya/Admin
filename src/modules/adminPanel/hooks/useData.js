import {useState, useEffect} from 'react';
import api from "../../../api";


export function UseData(urlComponent) {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        api.get(urlComponent).then(({data}) => {
            setList(data)
            setIsLoading(false)
        })
    }, [urlComponent])

    return {
        list,
        isLoading
    }
}

