import useData from "./useData";
// import genrs from "../data/genrs";

export interface Genre{
    id:number,
    name:string,
    image_background:string
}

// // get Data From Live
const useGenre = () =>useData<Genre>('/genres');

// // Get Data From Static data
// const useGenre = () =>({data:genrs, isLoading:false, error:null});

export default useGenre;