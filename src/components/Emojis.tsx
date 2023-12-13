import bullEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

interface EmojisProps {
  rating: number;
}
const Emojis = ({ rating }: EmojisProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "Exceptional", boxSize: "35px" },
  };
  return (
    <>
      <Image {...emojiMap[rating]} marginTop={1} />
    </>
  );
};

export default Emojis;
