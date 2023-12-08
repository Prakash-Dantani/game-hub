import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";

interface GenreListProps {
  onSelectGenre: (genere: Genre) => void;
}
const GenreList = ({ onSelectGenre }: GenreListProps) => {
  // const { genres } = useGenre();
  // return (
  //   <ul>
  //     {genres.map((genre) => (
  //       <li key={genre.id}> {genre.name} </li>
  //     ))}
  //   </ul>
  // );

  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
