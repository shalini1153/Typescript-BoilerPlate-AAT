import { Request, Response, NextFunction } from "express";
import ResponseMessage from "../utility/ReponseMessage";
import { appCode } from "../constants/AppCode";
import { httpStatus } from "../constants/HttpStatusCode";
import CreateResponse from "../utility/CreateResponse";

// ***@ no routes matched from the among register this function order should be last route

export const resourceNotFound = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const createResponse = new CreateResponse();
    const obj = new ResponseMessage();
    obj.appCode = appCode.error;
    obj.httpStatusCode = httpStatus.notFound;
    obj.message = "resource not found";
    res.status(httpStatus.notFound).send(obj);
};
