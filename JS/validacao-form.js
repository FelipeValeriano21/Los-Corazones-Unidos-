function validarFormulario() {
  const campos = ["nome", "cpf", "endereco", "telefone", "cep", "cidade", "estado", "nascimento", "email"];
  let formularioValido = true;

  campos.forEach(id => {
    const campo = document.getElementById(id);
    if (campo.value.trim() === "") {
      campo.style.border = "1px solid red";
      formularioValido = false;
    } else {
      campo.style.border = "1px solid #ccc";
    }
  });

  const alerta = document.getElementById("alerta");

  if (formularioValido) {
    const dados = {
      nome: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      endereco: document.getElementById("endereco").value,
      telefone: document.getElementById("telefone").value,
      cep: document.getElementById("cep").value,
      cidade: document.getElementById("cidade").value,
      estado: document.getElementById("estado").value,
      nascimento: document.getElementById("nascimento").value,
      email: document.getElementById("email").value
    };

    let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];

    voluntarios.push(dados);

    localStorage.setItem("voluntarios", JSON.stringify(voluntarios));

    alerta.classList.remove("alert-danger");
    alerta.classList.add("alert-success");
    alerta.textContent = "Formulário enviado com sucesso!";
    alerta.style.display = "block";

    setTimeout(() => {
      window.location.href = "usuarios-cadastrados.html"; 
    }, 1000);

  } else {
    alerta.classList.remove("alert-success");
    alerta.classList.add("alert-danger");
    alerta.textContent = "Por favor, preencha todos os campos obrigatórios.";
    alerta.style.display = "block";
  }
}
