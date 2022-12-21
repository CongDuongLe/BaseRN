import AxiosClient from '@utils/Https';



export const fetchLogin = (params: any) => {
  return AxiosClient.post(`/api/v1/security/login`, params);
};

export const getCsrfToken = () => {
  return AxiosClient.get(`/api/v1/security/csrf_token/`);
}
