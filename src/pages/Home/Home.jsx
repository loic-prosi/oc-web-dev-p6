import { Link, useLoaderData } from "react-router-dom";
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
                <Link
                  key={rental.id}
                  className="card"
                  to={`/rentals/${rental.id}`}
                >
                  <Card
                    id={rental.id}
                    title={rental.title}
                    cover={rental.cover}
                  />
                </Link>
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
