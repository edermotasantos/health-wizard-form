export const messages = (data) => {
  const message = JSON.parse(data.request.response).message;
  if (message === '"user id" is required') {
    return 'Por favor, preencha todos os campos';
  }
  if (message === '"medical insurance card" is required') {
    return 'Por favor, preencha a cateirinha do convênio corretamente';
  }
  if (message === 'Patient already registered') {
    return 'CPF do usuário já se encontra cadastrado';
  }
  if (message === 'Something went wrong. Try again later') {
    return 'Usuário não cadastrado';
  }
  if (message === '"name" length must be at least 8 characters long') {
    return 'Verifique se o usuário está correto, nome precisa ter mínimo 8 caractéres';
  }
};
