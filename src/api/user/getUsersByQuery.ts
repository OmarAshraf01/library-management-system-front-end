import {responseHandler} from "../util/responseHandler";
import {METHODS, requestApi, URL} from "../index";

export const getUsersByQuery = async (query: string) => {
    return responseHandler(await requestApi(METHODS.GET, URL.GET_USERS_BY_QUERY(query)));
}