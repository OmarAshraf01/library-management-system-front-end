export const CREATE_NEW_MEMBER = () => "/members";
export const EDIT_EXISTING_MEMBER = (memberUUID: string) => `/members/${memberUUID}`;
export const DELETE_EXISTING_MEMBER = (id: string) => `/members/${id}`;
export const GET_MEMBERS_BY_QUERY = (query: string) => `/members?q=${query}`;