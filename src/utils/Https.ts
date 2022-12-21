import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@services/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}

const AxiosClient = new Http().instance;

// config AxiosClient interceptors

AxiosClient.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('token', token);
        return config;
      }
    } catch (e) {
      console.log(e);
      console.log('error');
    }

  },
  error => {
    console.log('loi');
    return Promise.reject(error);
  },
);

export default AxiosClient;
