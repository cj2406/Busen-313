import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function NelsonMandelaScreen() {
  return (
    <HallPage
      name="Nelson Mandela"
      tagline="A welcoming hall with a strong social spirit."
      description="Nelson Mandela is a community-focused hall known in this guide for its active social atmosphere and welcoming resident community."
      imageSource={hallImages.nelsonMandela}
    />
  );
}
