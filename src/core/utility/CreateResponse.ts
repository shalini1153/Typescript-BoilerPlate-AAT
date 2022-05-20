import { Response } from "express";
import ResponseMessage from "./ReponseMessage";
import { appCode } from "../constants/AppCode";
import { httpStatus } from "../constants/HttpStatusCode";

class CreateResponse {
    success(res: Response, ResponseMessageObj: ResponseMessage) {
        try {
            if (!ResponseMessageObj.httpStatusCode) {
                ResponseMessageObj.httpStatusCode = httpStatus.ok;
            }

            if (!ResponseMessageObj.appCode) {
                ResponseMessageObj.appCode = appCode.success;
            }

            res.status(httpStatus.ok);
            res.send(ResponseMessageObj);
        } catch (error) {
            throw error;
        }
    }

    error(res: Response, ResponseMessageObj: ResponseMessage) {
        try {
            if (!ResponseMessageObj.httpStatusCode) {
                ResponseMessageObj.httpStatusCode =
                    httpStatus.internalServerError;
            }

            if (!ResponseMessageObj.appCode) {
                ResponseMessageObj.appCode = appCode.error;
            }

            res.status(httpStatus.internalServerError);
            res.send(ResponseMessageObj);
        } catch (error) {
            throw error;
        }
    }
}
export default CreateResponse;
