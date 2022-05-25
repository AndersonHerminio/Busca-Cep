const pesquisar = () => {
  const inputCep = document.getElementById("cep").value;
  consultarCep(inputCep);
};

const consultarCep = async (cep) => {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    let resposta = await (await fetch(url)).json();
    const resultado = document.getElementById("resultado");
    let html = `
        <p>Bairro: ${resposta.bairro}</p>
        <p>rua: ${resposta.logradouro}</p>
        <p>Municipio: ${resposta.localidade}</p>
      `;
    resultado.innerHTML = html;
  } catch (error) {
    console.log("DEU RUIM !!!");
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Desculpe, Tente novamente mais tarde!";
  }
};

// .then((resposta) => {
//   resposta.json().then((resposta) => {
//     const resultado = document.getElementById("resultado");
//     let html = `
//         <p>Bairro: ${resposta.bairro}</p>
//         <p>rua: ${resposta.logradouro}</p>
//         <p>Municipio: ${resposta.localidade}</p>
//       `;
//     console.log(resultado);
//     resultado.innerHTML = html;
//   });
// })
// .catch((e) => {
//   console.log(e);
// });
