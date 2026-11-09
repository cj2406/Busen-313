import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function EmeraldScreen() {
  return (
    <HallPage
      name="Emerald"
      tagline="A calm and well-kept place to call home."
      description="Emerald is a calm, well-kept residence option for students who value a comfortable place to recharge between classes and campus activities."
      imageSource={hallImages.emerald}
    />
  );
}
