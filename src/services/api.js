import axios from "axios";
import {AuthorizationStatus, HttpCode} from "../const";
import {ActionCreator} from "../store/action";

const BACKEND_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const createAPI = (dispatch) => {
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
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
