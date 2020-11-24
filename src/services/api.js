import axios from "axios";
import {AuthorizationStatus} from "../const";
import {ActionCreator} from "../store/action";

const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

const createAPI = (dispatch, login) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      dispatch(ActionCreator.getAuthorization(AuthorizationStatus.NO_AUTH));
      login();
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
