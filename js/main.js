$(document).ready(function () {
  $("#phone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");
  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      address: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      name: "Por favor, insira seu nome.",
      email: "Por favor, insira um e-mail válido.",
      phone: "Insira um telefone celular para contato.",
      cpf: "Por favor, insira seu cpf.",
      address: "Insira seu endereço.",
      cep: "Insira seu cep.",
    },
    invalidHandler: function (event, validator) {
      let fieldsIncorrects = validator.numberOfInvalids();
      if (fieldsIncorrects) {
        alert(`Existem ${fieldsIncorrects} campos incorretos`);
      }
    },
  });
});
