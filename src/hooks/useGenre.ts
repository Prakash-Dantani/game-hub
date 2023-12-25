import { useQuery } from "@tanstack/react-query";
import genres from "../data/genrs";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre>('/genres');
export interface Genre{
    id:number,
    name:string,
    image_background:string
}

const useGenre = () => useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24H'),
    initialData:genres
    
});

export default useGenre;