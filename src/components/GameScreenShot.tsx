import { Image } from "@chakra-ui/react";
import useGameScreenShot from "../hooks/useGameScreenShot";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenShot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenShot(gameId);
  if (isLoading) return null;
  if (error) throw error;
  //   const first = data?.results[0];
  //   if (!first) return null;
  return (
    <SimpleGrid column={{ base: 1, md: 2, lg: 3 }} spacing={3}>
      {data?.results.map((file) => {
        return <Image key={file.id} src={file.image} />;
      })}
    </SimpleGrid>
  );
};

export default GameScreenShot;
