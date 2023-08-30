import Banner from "../../components/Banner";
import mountain from "../../assets/images/mountain.png";

const About = () => {
  return (
    <>
      <Banner
        context="about-page"
        image={mountain}
        imageAlt="Paysage de montagnes enneigées avec une forêt de sapins"
      />
    </>
  );
};

export default About;
