import axios from 'axios';

export const getNormalText = () =>
  axios.get('http://10.0.2.2:5000/notification/1').then(res => res.data);

export const getDesignedText = () =>
  axios.get('http://10.0.2.2:5000/notification/2').then(res => res.data);

export const getImage = () =>
  axios.get('http://10.0.2.2:5000/notification/3').then(res => res.data);

export const getTimer = () =>
  axios.get('http://10.0.2.2:5000/notification/4').then(res => res.data);
