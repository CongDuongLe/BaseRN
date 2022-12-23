import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@services/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from '@navigators';

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
      const csrfToken = await AsyncStorage.getItem('csrfToken');
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      if (csrfToken !== null) {
        config.headers['X-CSRFToken'] = csrfToken;
      }

      return config;
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
AxiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { code } = error?.response?.data;
    if (code === 401) {
      // handle logout
      return navigationRef.current?.navigate('Login');
    }
    return Promise.reject(error);
  },
);
export default AxiosClient;
