
  document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.getElementById("tabela-local");
  const voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

  voluntarios.forEach((v, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${v.nome}</td>
      <td>${v.email}</td>
      <td>${v.telefone}</td>
      <td>${v.endereco}</td>
      <td>${v.cep}</td>
      <td>
        <button class="btn btn-danger" onclick="excluirVoluntario(${index})">Excluir</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
});

function excluirVoluntario(index) {
  let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
  voluntarios.splice(index, 1);
  localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
  location.reload(); }
