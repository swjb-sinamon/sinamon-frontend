import axios from 'axios';
import showToast from '../utils/Toast';
import ErrorMessage from '../error/ErrorMessage';

const host = process.env.REACT_APP_API_HOST || 'http://localhost:8080';

const Api = axios.create({
  baseURL: host,
  withCredentials: true
});

Api.interceptors.response.use(
  (res) => res,
  (e) => {
    if (!e.response || !e.response.data) return Promise.reject(e);

    const { success, error } = e.response.data;
    const isValidatorError = e.response.status === 400;
    const isErrorDataNullOrUndefined = !error;

    if (success) return Promise.reject(e);
    if (isErrorDataNullOrUndefined) return Promise.reject(e);
    if (isValidatorError) return Promise.reject(e);

    if (error === ErrorMessage.NO_PERMISSION) return Promise.reject(e);

    showToast(`🔥 ${error}`, 'danger');

    return Promise.reject(e);
  }
);

export default Api;
