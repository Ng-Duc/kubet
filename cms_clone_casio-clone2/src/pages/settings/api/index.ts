import HttpService from 'utils/http';

export const getSettingsApi = (): Promise<any> => {
  return HttpService.get('/get-settings');
};

export const updateSettingsApi = (data: any): Promise<any> => {
  return HttpService.post('/update-settings', data);
};
