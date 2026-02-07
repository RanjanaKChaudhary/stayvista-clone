
import Destination from "./Destination";
import Blogs from "./Blogs"
import About from "./About"


// import BestVillas from "./BestVillas";
// import ChooseCollection from "./ChooseCollection";
// import Featured from "./Featured";
// import GatewayPartners from "./GatewayPartners";
// import ListProperty from "./ListProperty";
// import Offers from "./Offers";
// import ShoppingCard from "./ShoppingCard";
// import StayLikeStars from "./StayLikeStars";
// import StayVistaStandard from "./StayVistaStandard";
// import Tailored from "./Tailored";

function HomePage() {
    return ( 
        <>
        <Destination/>
        {/* <ListProperty/>
        <Offers/>
        <BestVillas/>
        <StayVistaStandard/>
        <ChooseCollection/>
        <GatewayPartners/>
        <StayLikeStars/> */}
        <Blogs/>
        {/* <Tailored/>
        <Featured/> */}
 
        </>
    );
}

export default HomePage;