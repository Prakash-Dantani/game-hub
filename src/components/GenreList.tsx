import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../hooks/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  if (error) return null;

  const selectedGenreId = useGameQueryStore((S) => S.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((S) => S.setGenreId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={genre.image_background}
              />
              <Button
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                colorScheme={genre.id === selectedGenreId ? "green" : ""}
                variant="link"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
