import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import coast from "../../assets/images/coast.png";

const Home = () => {
  const rentals = useLoaderData();

  return (
    <>
      <Banner
        image={coast}
        imageAlt="Paysage côtier avec des rochers et une petite plage"
        text="Chez vous, partout et ailleurs"
      />
      <section className="cards">
        {rentals &&
          rentals.map((rental, index) => {
            if (rental) {
              return (
                <Card
                  key={rental.id + index}
                  id={rental.id}
                  title={rental.title}
                  cover={rental.cover}
                />
              );
            } else {
              return <Card key={index} />;
            }
          })}
      </section>
    </>
  );
};

export default Home;
