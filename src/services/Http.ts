import axios, { AxiosInstance } from 'axios';

export const apiConnection: AxiosInstance = axios.create({
  baseURL: 'https://public.connectnow.org.uk',
});