import { Spinner, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShot from "../components/GameScreenShot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // Never Null
  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading> {game.name}</Heading>
      <ExpandableText children={game.description_raw}></ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenShot gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
