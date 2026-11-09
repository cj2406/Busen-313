import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function TopazScreen() {
  return (
    <HallPage
      name="Topaz"
      tagline="A distinctive hall with a vibrant student feel."
      description="Topaz offers a distinctive and student-friendly residence experience, with a balance of comfort and an energetic campus atmosphere."
      imageSource={hallImages.topaz}
    />
  );
}
