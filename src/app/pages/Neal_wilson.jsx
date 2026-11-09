import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function NealWilsonScreen() {
  return (
    <HallPage
      name="Neal Wilson"
      tagline="Comfortable student living close to campus life."
      description="Neal Wilson combines student comfort with the convenience of staying connected to campus life."
      imageSource={hallImages.nealWilson}
    />
  );
}
