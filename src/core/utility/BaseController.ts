import { injectable } from "inversify";
import { appCode, AppCode } from "../constants/AppCode";
import { httpStatus, httpStatusCode } from "../constants/HttpStatusCode";
import CreateResponse from "./CreateResponse";

@injectable()
abstract class BaseController {
    httpStatusCode: httpStatusCode;
    appCode: AppCode;
    createResponse: CreateResponse;
}

BaseController.prototype.appCode = appCode;
BaseController.prototype.httpStatusCode = httpStatus;
BaseController.prototype.createResponse = new CreateResponse();

export default BaseController;
