import { ProfileCard } from "./components/ProfileCard";
import DaviesPhoto from "./assets/Davies.jpg";
import CarolinePhoto from "./assets/Caroline.jpg";
import AbelPhoto from "./assets/Abel.jpg";

export default function App(){
  return (
    <div>
      <ProfileCard 
      name="Davies Omare"
      role="Full Stack Developer"
      avatar={DaviesPhoto}
      />
      <ProfileCard
        name="Abel Maleko"
        role="Lead Developer"
        avatar={AbelPhoto}
      />
      <ProfileCard
        name="Carol Odhiambo"
        role="UI Designer"
        avatar={CarolinePhoto}
      />
    
    </div>
  );
}