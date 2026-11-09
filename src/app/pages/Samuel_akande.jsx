import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function SamuelAkandeScreen() {
  return (
    <HallPage
      name="Samuel Akande"
      tagline="A peaceful, well-organized residence option."
      description="Samuel Akande offers a peaceful atmosphere for students who appreciate a quieter, well-organized place to study and unwind."
      imageSource={hallImages.samuelAkande}
    />
  );
}
