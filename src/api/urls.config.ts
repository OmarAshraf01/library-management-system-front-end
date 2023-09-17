export const AUTHENTICATE = '/v1/auth/authenticate';
export const USER_BY_ID = (id: string) => `/users/${id}`;
export const DELETE_USER = (id: string) => `/users/${id}`;
export const CREATE_USER = () => "/users";
export const UPDATE_USER = () => "/users";
export const GET_USERS_BY_QUERY = (query: string) => `/users?q=${query}`;