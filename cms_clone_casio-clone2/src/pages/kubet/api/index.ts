import HttpService from 'utils/http';

export const getListUserKubet = (payload: any): Promise<any> => {
  return HttpService.get('/get-list-user', payload);
};

export const removeUser = (id: string): Promise<any> => {
  return HttpService.post('/delete-user', { id });
};
