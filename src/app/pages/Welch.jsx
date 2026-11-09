import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function WelchScreen() {
  return (
    <HallPage
      name="Welch"
      tagline="A welcoming hall with a balanced campus vibe."
      description="Welch is a welcoming residence option for students looking for a dependable balance between study, rest, and campus activities."
      imageSource={hallImages.welch}
    />
  );
}
