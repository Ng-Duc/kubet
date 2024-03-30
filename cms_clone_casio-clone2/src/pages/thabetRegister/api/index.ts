import HttpService from 'utils/http';

export const getListUserThabetRegister = (payload: any): Promise<any> => {
  return HttpService.get('/get-list-register', payload);
};

export const removeUserRegister = (id: string): Promise<any> => {
  return HttpService.post('/delete-register', { id });
};

export const dowloadFile = (casio: string): Promise<any> => {
  return HttpService.get('/export-to-excel', { casio });
};

export const deleteUserRegister = (casio: string): Promise<any> => {
  return HttpService.post('/delete-all-register', { casio });
};
