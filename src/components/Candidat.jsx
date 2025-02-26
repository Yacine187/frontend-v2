import { useState } from "react";

const Candidat = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = () => {
    alert(`Connexion en tant que candidat avec ${email}`);
  };

  return (
    <div className="container">
      <h1>Espace Candidat</h1>
      <p>Suivez l’évolution de vos parrainages et gérez votre profil.</p>

      <h2>Connexion</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Code d'authentification" value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleLogin}>Se connecter</button>

      <h2>Suivi des parrainages</h2>
      <button>Voir les statistiques</button>

      <h2>Exporter les données</h2>
      <button>Télécharger PDF</button>
    </div>
  );
};

export default Candidat;
