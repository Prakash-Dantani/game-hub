import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatformSearch";
import useGenreSearch from "../hooks/useGenerSearch";
import useGameQueryStore from "../hooks/store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenreSearch(genreId);

  const platformId = useGameQueryStore((p) => p.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" paddingY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
