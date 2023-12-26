import APIClient from "../services/api-client"
import { GameScreenShots } from "../entities/GameScreenShots"
import { useQuery } from "@tanstack/react-query";
const useGameScreenShot = (gameId:number) => {
    const apiClient = new APIClient<GameScreenShots>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey:['screenshots', gameId],
        queryFn:apiClient.getAll,
    })
}

export default useGameScreenShot;