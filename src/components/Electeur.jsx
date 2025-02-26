import { useState } from "react";

const Electeur = () => {
  const [electeurID, setElecteurID] = useState("");
  const [cin, setCIN] = useState("");
  const [code, setCode] = useState("");

  const handleParrainage = () => {
    alert(`Parrainage validé pour électeur ${electeurID}`);
  };

  return (
    <div className="container">
      <h1>Espace Électeur</h1>
      <p>Parrainez un candidat de manière sécurisée.</p>

      <h2>Créer un profil</h2>
      <input type="text" placeholder="Numéro d’électeur" value={electeurID} onChange={(e) => setElecteurID(e.target.value)} />
      <input type="text" placeholder="Numéro de CIN" value={cin} onChange={(e) => setCIN(e.target.value)} />
      <button>Recevoir Code d'authentification</button>

      <h2>Parrainage</h2>
      <input type="text" placeholder="Code d'authentification" value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleParrainage}>Parrainer un candidat</button>
    </div>
  );
};

export default Electeur;
