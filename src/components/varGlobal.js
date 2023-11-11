//port du server
const db = {
    port: 3000,
  };
  
  //Variable global qui permet de rajouter le port (car dans la bdd il n'y a que le nom de l'image)

  const varGlobal = `http://localhost:${db.port}`; // https://nom_de_domaine:${db.port}
  export default varGlobal;
