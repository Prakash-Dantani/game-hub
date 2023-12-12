import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeloton from "./GameCardSkeloton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface SelectedGenreProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: SelectedGenreProps) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skelotons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skelotons.map((skeloton) => (
            <GameCardContainer key={skeloton}>
              <GameCardSkeloton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
