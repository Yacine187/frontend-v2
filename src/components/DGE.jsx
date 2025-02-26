import { useState } from "react";

const DGE = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      alert("Fichier importé : " + file.name);
    }
  };

  return (
    <div className="container">
      <h1>Direction Générale des Élections</h1>
      <p>Gérez les fichiers électoraux et le processus de parrainage.</p>

      <h2>Importer la liste des électeurs</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Importer</button>

      <h2>Gestion des Candidats</h2>
      <button>Ajouter un candidat</button>

      <h2>Définir la période de parrainage</h2>
      <input type="date" />
      <button>Définir</button>
    </div>
  );
};

export default DGE;
