import { Heading } from "@chakra-ui/react";

interface Props {
  name: string;
}
const Demo = ({ name }: Props) => {
  return (
    <>
      <div>
        <Heading as="h1" paddingY={5}>
          {name}
        </Heading>
      </div>
    </>
  );
};

export default Demo;
