import { Link } from "react-router-dom";
import "./../styles.css"; // Import du fichier CSS

const HomePage = () => {
  return (
    <div className="container">
      <h1>Gestion des Parrainages</h1>
      <div className="cards">
        <div className="card">
          <h2>DGE </h2>
          <p>Gérer les fichiers électoraux et superviser le parrainage.</p>
          <Link to="/dge" className="button">Accéder</Link>
        </div>
        <div className="card">
          <h2>Candidats</h2>
          <p>Suivez l’évolution de vos parrainages et gérez votre profil.</p>
          <Link to="/candidat" className="button">Accéder</Link>
        </div>
        <div className="card">
          <h2>Électeurs</h2>
          <p>Parrainez un candidat de manière sécurisée.</p>
          <Link to="/electeur" className="button">Accéder</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
