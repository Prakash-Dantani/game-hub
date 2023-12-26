import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T>{
    count:number,
    next:string | null,
    results:T[],
}

const axiousInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'d5db7e2711a64958a0c4f7f3ca147a1d'
    }
});

class APIClient<T>{
    endpoint:string;
    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiousInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }

    get = (id:number|string) => {
        return axiousInstance.get<T>(this.endpoint+'/'+id).then(res => res.data);
    }
}
export default APIClient;

