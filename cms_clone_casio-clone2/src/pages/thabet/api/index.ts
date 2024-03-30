import HttpService from 'utils/http';
import axios from 'axios';
import { APP_CONFIG } from 'utils/env';
import moment from 'moment';
import { notification } from 'antd';

export const getListUserThabet = (payload: any): Promise<any> => {
  return HttpService.get('/get-list-user', payload);
};

export const removeUser = (id: string): Promise<any> => {
  return HttpService.post('/delete-user', { id });
};

export const dowloadFile = (casio: string): Promise<any> => {
  // return axios.get(APP_CONFIG.apiUrl + `/export-to-excel?casio=${casio}`).then(
  //   (res) => {
  //     console.log('ress', res)
  //     const nameFile = `${moment().format('SSMMHH-DDMMYYYY')}-list-user.xlsx`;
  //     const url = window.URL.createObjectURL(new Blob([res.data]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', nameFile); //or any other extension
  //     document.body.appendChild(link);
  //     link.click();
  //   },
  //   (err) => {
  //     notification['error']({
  //       message: 'Error',
  //       description: err.response.data.error ? err.response.data.error : 'An error occurred, please try again',
  //     });
  //   },
  // );

  return HttpService.get('/export-to-excel', { casio });
};

export const deleteAllUser = (casio: string): Promise<any> => {
  return HttpService.post('/delete-all-user', { casio: casio });
};
