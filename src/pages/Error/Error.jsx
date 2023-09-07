import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="page page--error">
      <h2 className="error-page__title">404</h2>
      <h3 className="error-page__subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <Link className="error-page__return-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default Error;
