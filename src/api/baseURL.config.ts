const HOST_URL = "http://localhost:3000";
const API = "/api";
export const getBaseurl = (url: string) => `${HOST_URL}${API}${url}`;
