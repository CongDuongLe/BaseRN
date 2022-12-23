import AxiosClient from '@utils/Https';

export const getUserInfo = () => {
  return AxiosClient.get('/api/v1/me/');
};

export const getListMenuItems = () => {
  return AxiosClient.get('/api/v1/dashboard/list-menu');
};
