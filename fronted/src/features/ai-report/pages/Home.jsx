import { useAuthContext } from "../../authentication/context/auth.context.js";

import Heading from './../components/home-componenets/Heading';
import GuidedScan from "../components/home-componenets/GuidedScan.jsx";
import Recents from "../components/home-componenets/Recents.jsx";

const Home = () => {
  const { user } = useAuthContext();

  

  return (
    <div>
      
      <Heading user={user}/>

      <GuidedScan/>

      <Recents/>
    </div>
  );
};

export default Home;
