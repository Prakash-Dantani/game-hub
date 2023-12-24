// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genrs";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre{
    id:number,
    name:string,
    image_background:string
}

// // get Data From Live
// const useGenre = () =>useData<Genre>('/genres');

// // Get Data From Static data
const useGenre = () => useQuery({
    queryKey:['genres'],
    queryFn:()=> apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24*60*60*1000,
    initialData:genres
    
});

export default useGenre;