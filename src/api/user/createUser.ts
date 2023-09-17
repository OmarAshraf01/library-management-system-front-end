import { METHODS, requestApi, URL } from "..";
import {responseHandler} from "../util/responseHandler";
import {User} from "../../components/common/CreateEditViewUser";

export const createUser = async (body: User) => {
    return responseHandler(await requestApi(METHODS.POST, URL.CREATE_USER(), body));
}