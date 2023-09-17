import { METHODS, requestApi, URL } from "..";
import {responseHandler} from "../util/responseHandler";

export const updateUser = async (body: {}) => {
    return responseHandler(await requestApi(METHODS.PATCH, URL.UPDATE_USER(), body));
}