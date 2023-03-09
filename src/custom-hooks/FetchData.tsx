import { useEffect, useState } from "react"
import { server_calls } from "../api/server"


export const useGetData = () => {
  const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // useEffect on mount (research this later liz) - when the data comes into existence = "on mount"
    // The empty list at the end is to prevent this from running over and over
    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch }
  
}
