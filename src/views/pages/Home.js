import React from "react";
import image1 from "../../images/breakfast-g175488b4c_640.jpg";
import image2 from "../../images/sauce-arrabiata-g480357983_640.jpg";
import image3 from "../../images/diet.jpg";
import Slider from "../components/Slider";
import Slide from "../components/Slide";
import Section from "../components/Section";
import img1 from "../../images/pasta.jpg";
import img2 from "../../images/vegetable.jpg";

function Home() {
    return (
        <div className="home">
            <Slider />

            <Section
                img={img1}
                title="Dieta Sana"
                text="Non credere mai a chi nutre dei pregiudizi. I piatti 'green' contengono le stesse quantità di nutrienti che assumeresti in piatti 
      di carne."
                reverse={false}
            />
            <Section
                img={img2}
                title="Forma Fisica"
                text="Potrai tenere allenato e in forma il tuo corpo con piatti ricchi di proteine
      ma privi di grassi."
                reverse={true}
            />
        </div>
    );
}

export default Home;
