import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function BethelSplendorScreen() {
  return (
    <HallPage
      name="Bethel Splendor"
      tagline="A spacious, welcoming hall with a lively community feel."
      description="Bethel Splendor is a popular choice for residents looking for room to settle in and a welcoming community around them."
      imageSource={hallImages.bethelSplendor}
    />
  );
}
