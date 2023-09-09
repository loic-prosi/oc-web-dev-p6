import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import coast from "../../assets/images/coast.png";

const Home = () => {
  const rentals = useLoaderData();

  const renderCardsList = rentals && rentals.length > 0;

  return (
    <main className="page">
      <Banner
        image={coast}
        imageAlt="Paysage côtier avec des rochers et une petite plage"
        text="Chez vous, partout et ailleurs"
      />
      {renderCardsList && (
        <section className="cards">
          {rentals.map((rental) => {
            return (
              rental &&
              rental.id && (
                <Card
                  key={rental.id}
                  id={rental.id}
                  title={rental.title}
                  cover={rental.cover}
                />
              )
            );
          })}
        </section>
      )}
    </main>
  );
};

export default Home;
