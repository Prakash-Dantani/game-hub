// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genrs";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');
export interface Genre{
    id:number,
    name:string,
    image_background:string
}

const useGenre = () => useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000,
    initialData:genres
    
});

export default useGenre;