import HallPage from "../../components/hall-page";
import hallImages from "../../constants/hall-images";

export default function WinslowScreen() {
  return (
    <HallPage
      name="Winslow"
      tagline="A comfortable and friendly place to stay."
      description="Winslow offers a comfortable, friendly home base for students as they take part in day-to-day life at Babcock University."
      imageSource={hallImages.winslow}
    />
  );
}
