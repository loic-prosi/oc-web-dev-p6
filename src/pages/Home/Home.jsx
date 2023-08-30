import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

const Home = () => {
  const rentals = useLoaderData();

  return (
    <>
      <Banner />
      <section className="cards-container">
        {rentals &&
          rentals.map((rental) => {
            return (
              <Card
                key={rental.id}
                id={rental.id}
                title={rental.title}
                image={rental.cover}
              />
            );
          })}
      </section>
    </>
  );
};

export default Home;
