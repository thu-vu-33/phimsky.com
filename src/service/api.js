import { apis } from "service";

const COMMON_URL = `https://reqres.in/api/`;

const API_URLS = { GET_USERS_FROM_REQRES_IN_API: `${COMMON_URL}users` };

export const getUsersFromReqresInApi = (payload) =>
  apis.get(API_URLS.GET_USERS_FROM_REQRES_IN_API, {
    ...payload,
    params: { page: "2", ...payload?.params },
  });
