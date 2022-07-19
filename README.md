# Health Wizard Form

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>

---

<p align="center">
  <img src="/frontend/public/health-wizard-form-mobile.jpg" alt="Sublime's custom image"/>
</p>


---

## Contexto

---

Esse projeto foi desenvolvido para uma vaga de desenvolvedor na empresa be3 health tech.

A proposta era desenvolver uma aplicação full stack para envio de um formulário do front end para o back end populando um banco de dados.

Um usuário é encarregado de fazer o cadastro de pacientes. Foram considerados os seguintes dados:

- Prontuário
- Nome
- Sobrenome
- Data de nascimento
- Gênero
- CPF
- RG
- UF do RG
- Email
- Celular
- Telefone fixo
- Convênio
- Carteirinha do convênio
- Validade da carteirinha (mês/ano)

Para que o usuário consiga ter acesso ao formuláriom, é necessário que o mesmo esteja logado e preencha todos os campos necessários. É importante salientar que não é possível registrar duas vezes o mesmo CPF. Sendo os seguintes dados:

usuário: teste.be3
senha: ProcSeletivo#2020
base de dados: DB

O banco de dados foi configurado para rodar localmente e com as configurações de ambiente protegidos.

Foi utilizado MySql como uma alternativa ao SQL Server proposto inicialmente.

Para facilitar a organização dos dados foi considerado o uso da normalização, alterando a estrutura e separando os dados de acordo suas tabelas e relacionando através do usa das foreign keis. Desse modo foi considerado inicialmente que o usuário responsável pelo cadastro possui o nome e senha registrado no banco de dados, assim como uma tabela de Unidade Federativas, Gênero que é armazenado através das Seeders do Sequelizer.

Essa é a organização de cada tabela:

Dados do usuário:

```json
{
  "id": 1,
  "name": "teste.be3",
  "password": "ProcSeletivo#2020"
}
```

Unidade Federativas (UF):

```json
[
  {
    "id": 1,
    "uf_code": 12,
    "federation_unit": "Acre (AC)",
    "abbreviation": "AC"
  },
  {
    "id": 2,
    "uf_code": 27,
    "federation_unit": "Alagoas (AL)",
    "abbreviation": "AL"
  },
  {
    "id": 3,
    "uf_code": 16,
    "federation_unit": "Amapá (AP)",
    "abbreviation": "AP"
  },
  {
    "id": 4,
    "uf_code": 13,
    "federation_unit": "Amazonas (AM)",
    "abbreviation": "AM"
  },
  {
    "id": 5,
    "uf_code": 29,
    "federation_unit": "Bahia (BA)",
    "abbreviation": "BA"
  },
  {
    "id": 6,
    "uf_code": 23,
    "federation_unit": "Ceará (CE)",
    "abbreviation": "CE"
  },
  {
    "id": 7,
    "uf_code": 53,
    "federation_unit": "Distrito Federal (DF)",
    "abbreviation": "DF"
  },
  {
    "id": 8,
    "uf_code": 32,
    "federation_unit": "Espírito Santo (ES)",
    "abbreviation": "ES"
  },
  {
    "id": 9,
    "uf_code": 52,
    "federation_unit": "Goiás (GO)",
    "abbreviation": "GO"
  },
  {
    "id": 10,
    "uf_code": 21,
    "federation_unit": "Maranhão (MA)",
    "abbreviation": "MA"
  },
  {
    "id": 11,
    "uf_code": 51,
    "federation_unit": "Mato Grosso (MT)",
    "abbreviation": "MT"
  },
  {
    "id": 12,
    "uf_code": 50,
    "federation_unit": "Mato Grosso do Sul (MS)",
    "abbreviation": "MS"
  },
  {
    "id": 13,
    "uf_code": 31,
    "federation_unit": "Minas Gerais (MG)",
    "abbreviation": "MG"
  },
  {
    "id": 14,
    "uf_code": 15,
    "federation_unit": "Pará (PA)",
    "abbreviation": "PA"
  },
  {
    "id": 15,
    "uf_code": 25,
    "federation_unit": "Paraíba (PB)",
    "abbreviation": "PB"
  },
  {
    "id": 16,
    "uf_code": 41,
    "federation_unit": "Paraná (PR)",
    "abbreviation": "PR"
  },
  {
    "id": 17,
    "uf_code": 26,
    "federation_unit": "Pernambuco (PE)",
    "abbreviation": "PE"
  },
  {
    "id": 18,
    "uf_code": 22,
    "federation_unit": "Piauí (PI)",
    "abbreviation": "PI"
  },
  {
    "id": 19,
    "uf_code": 33,
    "federation_unit": "Rio de Janeiro (RJ)",
    "abbreviation": "RJ"
  },
  {
    "id": 20,
    "uf_code": 24,
    "federation_unit": "Rio Grande do Norte (RN)",
    "abbreviation": "RN"
  },
  {
    "id": 21,
    "uf_code": 43,
    "federation_unit": "Rio Grande do Sul (RS)",
    "abbreviation": "RS"
  },
  {
    "id": 22,
    "uf_code": 11,
    "federation_unit": "Rondônia (RO)",
    "abbreviation": "RO"
  },
  {
    "id": 23,
    "uf_code": 14,
    "federation_unit": "Roraima (RR)",
    "abbreviation": "RR"
  },
  {
    "id": 24,
    "uf_code": 42,
    "federation_unit": "Santa Catarina (SC)",
    "abbreviation": "SC"
  },
  {
    "id": 25,
    "uf_code": 35,
    "federation_unit": "São Paulo (SP)",
    "abbreviation": "SP"
  },
  {
    "id": 26,
    "uf_code": 28,
    "federation_unit": "Sergipe (SE)",
    "abbreviation": "SE"
  },
  {
    "id": 27,
    "uf_code": 17,
    "federation_unit": "Tocantins (TO)",
    "abbreviation": "TO"
  }
]
```

Convênio Médico:

```json
[
  {
    "id": 1,
    "name": "Amil Assistência Médica"
  },
  {
    "id": 2,
    "name": "Bradesco Seguros"
  },
  {
    "id": 3,
    "name": "Central Nacional Unimed (CNU)"
  },
  {
    "id": 4,
    "name": "GreenLine Sistema de Saúde"
  },
  {
    "id": 5,
    "name": "NotreDame Intermédica"
  },
  {
    "id": 6,
    "name": "SulAmérica"
  }
]
```

Dados do Paciente:

```json
{
  "id": 1,
  "user_id": 1,
  "gender_id": 1,
  "medical_insurance_id": 1,
  "uf_id": 25,
  "medical_record": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "first_name": "Lorem",
  "last_name": "Ipsum",
  "full_name": "Lorem Ipsum",
  "birth_date": "1978-05-06",
  "cpf": "25656040625",
  "rg": "220130436",
  "email": "lorem@gmail.com",
  "mobile": "11970004386",
  "phone": "1122084787",
  "medical_insurance_card": "6377396708905689",
  "card_expiration_date": "2027-01-01"
}
```

Em dados do paciente tem as foreign keys:

- `user_id`
- `gender_id`
- `medical_insurance_id`
- `uf_id`

Elas representam o id de cada tabela, de forma a indicar o usuário que registrou, o gênero, o convênio médico e a UF do RG do paciente.

Obs.: Nessa representação foi desconsideradas as chaves `createdAt` e `updatedAt`, responsáveis respectivamente a representar a data de criação e de atualização.

### Tecnologias

---

## Back End

- `Node.js`
- `MySQL`
- `Sequelize`
- `Jest`

## Front End

- `React.js`(Context API e Hooks)
- `HTML`
- `Material UI`

## Desenvolvimento

O desenvolvimento da aplicação foi feito no `VSCODE`, inicialmente trabalhado o `Front End` através do `React.js` com `Material UI`. Foi feito um "wizard form" com cada "passo" pré-definido e com parte da estrutura já encaminhada.
Logo após foi criada uma função para o preenchimento de um arquivo `.txt` de modo a atender os requisitos inicias.
No `Back End` me propus a trabalhar com `Node.js`, `MySQL` e `Sequelizer` para facilitar o desenvolvimento.
Logo após desenvolver todos alguns endpoints e toda a estrutura necessária para popular o banco de dados, retornei ao Front End trabalhando não só em ajustes para renderização e a estilização da página, mas também para fazer o `fetch` para envio e recebimento dos dados.

## Como instalar

Pre-requisitos para rodar o projeto:

- `MySQL`
- `React.js`

Copie o ssh do projeto `git@github.com:edermotasantos/health-wizard-form.git`

- Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  - `git clone git@github.com:edermotasantos/health-wizard-form.git`
  - `cd health-wizard-form`
  - `cd frontend`
  - `npm install`
  - `cd ..`
  - `cd backend`
  - `npm install`

  No MySQL digite `CREATE SCHEMA `DB` ;` para criação do banco de dados e digite no terminal o seguite comando:

  - `npm run dev`

A inicialização da aplicação é feita na pasta `/health-wizard-form/backend` com o comando `npm run dev` que irá rodar tanto o `front end` como o `back end`. Isso ocorre devido a configuração em `package.json` do `back end`, tendo em scripts as seguintes configurações:

```json
"scripts": {
    "prestart": "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate",
    "start": "npx sequelize-cli db:seed:all",
    "client": "npm start --prefix ../frontend",
    "server": "nodemon .",
    "dev": "concurrently \"npm start\" \"npm run server\" \"npm run client\"",
},
```

Antes disso são feitos todos os procedimentos para em `prestart` para o Sequelize popular o banco de dados.

A aplicação está configurada para rodar o `back end` na porta local `3001`, enquanto o `front end` irá rodar na porta `3000`. Localmente foi utilizado um arquivo `.env` (não enviado para o github) para as configurações locais, mas as funções estão configuradas para que também possa ser utilizadas sem esse arquivo.

Para o arquivo `.env` configure da seguite maneira:

`PORT=3001`
`DB_HOST=localhost`
`DB_NAME=DB`
`DB_USER=seu_usuario_mysql`
`DB_PASS=sua_senha_mysql`

---

## Modo de utilização

A API consta com 2 rotas:

- `/users` [`POST`] Para o usuário logar
- `/patients` [`POST`] Para enviar os dados dos pacientes

---

## Desenvolvimento

---

Durante o desenvolvimento do `front end` (client), no envio para a inserção de novas respostas, foi decidido utilizar o dado que retorna desta inserção utilizando o método `POST`. Sendo utilizados os dados para serem exibidos na renderização das quantidades de respostas.

---

### Banco de dados

Foi utilizado o `MongoDB` pela fácil inserção e extração de dados.

---

## Etapas Ausentes ou que precisam ser melhoradas

- Refatoração do código e organização das mensagens de erro
- Criação de mais validadores no `back end`
- Correção de espaçamento e cores na estilização

## Próximos passos

- Implementar mais teste Jest e Cypress
- Deploy no `Heroku`

---

# Entre em contato:

<div> 
  <a href="https://www.linkedin.com/in/eder-santos-dev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
  <a href = "mailto:eder.mota@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a> 
</div>
