const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('1 - Sua aplicação deve ter o endpoint POST `/users`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
  });

  it('Será validado que é possível logar usuário com sucesso', async () => {
    await frisby
      .post(`${url}/users`,
        {          
           password: "ProcSeletivo#2020",
           name: "teste.be3",
        })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.token).not.toBeNull();
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `name` menor que 8 caracteres', async () => {
    await frisby
      .post(`${url}/users`,
        {
          password: "ProcSeletivo#2020",
          name: "test",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"name" length must be at least 8 characters long');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `password` menor que 6 caracteres', async () => {
    await frisby
      .post(`${url}/users`,
        {
            password: "Proc",
            name: "teste.be3",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"password" length must be 6 characters long');
      });
  });

  it('Será validado que o campo `password` é obrigatório', async () => {
    await frisby
      .post(`${url}/users`,
        {
            name: "teste.be3",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"password" is required');
      });
  });

  it('Será validado que o campo `name` é obrigatório', async () => {
    await frisby
      .post(`${url}/users`,
        {
            password: "ProcSeletivo#2020",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"name" is required');
      });
  });
});
