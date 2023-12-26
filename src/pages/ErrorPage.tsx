import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box paddingX={5}>
        <Heading> Oops </Heading>
        {isRouteErrorResponse(error)
          ? "This Page Does Not Exist"
          : "Something wrong, Please Try After Some times."}
      </Box>
    </>
  );
};

export default ErrorPage;
