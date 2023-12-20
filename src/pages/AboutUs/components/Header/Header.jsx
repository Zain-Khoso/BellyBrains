// Assets
import PlaceholderFounder from "../../assets/placeholderFounder.jpg";
import Founder from "../../assets/founder.jpg";

// Components
import {
    StyledHeader,
    PageIntro,
    IntroTitle,
    CardWrapper,
} from "./header.styed";
import Navbar from "../../../../components/Navigation/Navbar/Navbar";
import Card from "../Card/Card";

export default function Header() {
    return (
        <StyledHeader>
            <Navbar />
            <PageIntro>
                <IntroTitle>What is Belly Brains?</IntroTitle>
                <p style={{ textAlign: "left" }}>
                    A culinary haven where passion meets plate. Established on
                    July 9th, 1969, in Sukkur, we have been crafting
                    extraordinary dining experiences for over five decades. Join
                    us in savoring the art of flavors and the joy of timeless
                    moments. Your journey into exceptional food and coffee
                    begins here.
                </p>
            </PageIntro>
            <CardWrapper>
                <Card
                    title="Founder"
                    alt="Marco Savoni"
                    placeholderImage={PlaceholderFounder}
                    image={Founder}
                    text="<span>Chef Marco</span>, the visionary behind Belly Brains, devoted his life to culinary excellence. From Sukkur to global kitchens, his passion and expertise shaped our extraordinary menu. Every dish at Belly Brains reflects the legacy of a lifetime dedicated to the art of food."
                    imageSizePriority={"h"}
                />
            </CardWrapper>
        </StyledHeader>
    );
}