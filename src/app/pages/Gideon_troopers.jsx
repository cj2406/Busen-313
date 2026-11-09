import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function GideonTroopersScreen() {
  return (
    <HallPage
      name="Gideon Troopers"
      tagline="A lively hall with an active student community."
      description="Gideon Troopers brings a lively social feel to student residence life, giving residents a home base for connecting with friends and joining campus activities."
      imageSource={hallImages.gideonTroopers}
    />
  );
}
