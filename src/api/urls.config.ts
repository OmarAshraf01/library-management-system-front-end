export const CREATE_NEW_MEMBER = () => "/members";
export const EDIT_EXISTING_MEMBER = (memberUUID: string) => `/members/${memberUUID}`;
export const GET_MEMBERS_BY_QUERY = (query: string) => `/members?q=${query}`;