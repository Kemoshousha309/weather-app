import { useState } from "react";
import { fetchCurrentData } from "../utils/api";

export function useGetData(query: string) {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
    const [errMess, setErrMess] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        fetchCurrentData(query)
        .then((data) => {
            setLoading(false)
            if(data.success) {
                setCurrentWeather(data.payload as CurrentWeather);
                setErrMess("")
            }else {
                setErrMess(data.payload as string);
                setCurrentWeather(null)
            }
        })  
    }

    return {currentWeather, submitHandler, loading, errMess}
}   