import axios from 'axios';

const port = 3001;

const PORT = process.env.PORT || port;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const doLogin = async (email, password) => {
  try {
    const result = await api.post('/users', { email, password });
    return result.data;
  } catch (e) {
    return e;
  }
};

export const toRegisterPatient = async (newForm) => {
  try {
    const result = await api.post('/patients', newForm);
    return result.data;
  } catch (e) {
    return e;
  }
};
