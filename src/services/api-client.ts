import axios from "axios"

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:'d5db7e2711a64958a0c4f7f3ca147a1d'
    }
})
