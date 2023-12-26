import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box
      width="280px"
      borderRadius={10}
      overflow={"hidden"}
      _hover={{ transform: "scale(1.03)" }}
      transition="transform .15s ease-in"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
