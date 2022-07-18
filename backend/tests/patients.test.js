const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3001';

describe('1 - Sua aplicação deve ter o endpoint POST `/patients`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create && npx sequelize-cli db:migrate $');
  });

  it('Será validado que o campo `user_id` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"user id" is required');
      });
  });

  it('Será validado que o campo `gender_id` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"gender id" is required');
      });
  });

  it('Será validado que o campo `medical_insurance_id` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"medical insurance id" is required');
      });
  });

  it('Será validado que o campo  `uf_id` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
      {
        user_id: 1,
        gender_id: 1,
        medical_insurance_id: 1,
        medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        first_name: "Lorem",
        last_name: "Ipsum",
        full_name: "Lorem Ipsum",
        birth_date: "1978-05-06",
        cpf: "12395678910",
        rg: "220130436",
        email: "lorem@gmail.com",
        mobile: "11970004386",
        phone: "1122084787",
        medical_insurance_card: "6377396708905689",
        card_expiration_date: "2027-01-01",
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"UF" is required');
      });
  });

  it('Será validado que o campo  `medical_record` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
      {
        user_id: 1,
        gender_id: 1,
        medical_insurance_id: 1,
        uf_id: 25,
        first_name: "Lorem",
        last_name: "Ipsum",
        full_name: "Lorem Ipsum",
        birth_date: "1978-05-06",
        cpf: "12395678910",
        rg: "220130436",
        email: "lorem@gmail.com",
        mobile: "11970004386",
        phone: "1122084787",
        medical_insurance_card: "6377396708905689",
        card_expiration_date: "2027-01-01",
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"medical record" is required');
      });
  });

  it('Será validado que o campo  `first_name` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
      {
        user_id: 1,
        gender_id: 1,
        medical_insurance_id: 1,
        uf_id: 25,
        medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        last_name: "Ipsum",
        full_name: "Lorem Ipsum",
        birth_date: "1978-05-06",
        cpf: "12395678910",
        rg: "220130436",
        email: "lorem@gmail.com",
        mobile: "11970004386",
        phone: "1122084787",
        medical_insurance_card: "6377396708905689",
        card_expiration_date: "2027-01-01",
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"first name" is required');
      });
  });

  it('Será validado que o campo  `last_name` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
      {
        user_id: 1,
        gender_id: 1,
        medical_insurance_id: 1,
        uf_id: 25,
        medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        first_name: "Lorem",
        full_name: "Lorem Ipsum",
        birth_date: "1978-05-06",
        cpf: "12395678910",
        rg: "220130436",
        email: "lorem@gmail.com",
        mobile: "11970004386",
        phone: "1122084787",
        medical_insurance_card: "6377396708905689",
        card_expiration_date: "2027-01-01",
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"last name" is required');
      });
  });

  it('Será validado que o campo  `birth_date` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"birth date" is required');
      });
  });

  it('Será validado que o campo  `rg` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"RG" is required');
      });
  });

  it('Será validado que o campo  `phone` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('At least a "phone" is required');
      });
  });

  it('Será validado que o campo  `medical_insurance_card` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"medical insurance card" is required');
      });
  });

  it('Será validado que o campo  `card_expiration_date` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"card expiration date" is required');
      });
  });
  
  it('Será validado que é possível cadastrar um paciente com sucesso', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.token).not.toBeNull();
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `full_name` menor que 8 caracteres', async () => {
    await frisby
      .post(`${url}/patients`,
        {  
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lo",
          last_name: "Ip",
          full_name: "Lo Ip",
          birth_date: "1978-05-06",
          cpf: "10345679912",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01", 
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"name" length must be at least 8 characters long');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `email` com formato `email: lorem`', async () => {
    await frisby
      .post(`${url}/patients`,
        {  
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "10345678912",
          rg: "220130436",
          email: "lorem",
          mobile: "11970014386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01", 
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"email" must be a valid email');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `email` com formato `email: @gmail.com`', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12345678910",
          rg: "220130436",
          email: "@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"email" must be a valid email');
      });
  });

  it('Será validado que o campo `email` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
      {
        user_id: 1,
        gender_id: 1,
        medical_insurance_id: 1,
        uf_id: 25,
        medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        first_name: "Lorem",
        last_name: "Ipsum",
        full_name: "Lorem Ipsum",
        birth_date: "1978-05-06",
        cpf: "12395678910",
        rg: "220130436",
        mobile: "11970004386",
        phone: "1122084787",
        medical_insurance_card: "6377396708905689",
        card_expiration_date: "2027-01-01",
      })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"email" is required');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `cpf` menor que 11 caracteres', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "123",
          rg: "220130436",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"CPF" length must be at least 11 characters long');
      });
  });

  it('Será validado que o campo `cpf` é obrigatório', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"CPF" is required');
      });
  });

  it('Validar que não é possível cadastrar um usuário com cpf já registrado', async () => {
    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 201);

    await frisby
      .post(`${url}/patients`,
        {
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          first_name: "Lorem",
          last_name: "Ipsum",
          full_name: "Lorem Ipsum",
          birth_date: "1978-05-06",
          cpf: "12395678910",
          rg: "220130436",
          email: "lorem@gmail.com",
          mobile: "11970004386",
          phone: "1122084787",
          medical_insurance_card: "6377396708905689",
          card_expiration_date: "2027-01-01",
        })
      .expect('status', 409)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Patient already registered');
      });
  });
});
