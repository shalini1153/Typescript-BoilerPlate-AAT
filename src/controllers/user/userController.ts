import { injectable, inject } from "inversify";
import { IUserService } from "../../services/user/userService";
import { Request, Response, NextFunction } from "express";
import Types from "../../config/types";
import BaseController from "../../core/utility/BaseController";
import ReponseMessage from "../../core/utility/ReponseMessage";
import ResponseMessage from "../../core/utility/ReponseMessage";
import { httpStatus } from "../../core/constants/HttpStatusCode";
import { appCode } from "../../core/constants/AppCode";
import logger from "../../core/logger";

@injectable()
export default class UserController extends BaseController {
    @inject(Types.UserService) private userService: IUserService;
    getAllUser = async (req: Request, res: Response, next: NextFunction) => {
        const data = await this.userService.getAll();
        let obj = new ReponseMessage(
            this.httpStatusCode.ok,
            this.appCode.success,
            "",
            data
        );
        this.createResponse.success(res, obj);
    };

    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        let obj = new ResponseMessage();
        try {
            let id = req.params.id;
            let docs = await this.userService.getUserById(parseInt(id));
            if (docs) {
                obj.httpStatusCode = httpStatus.ok;
                obj.appCode = appCode.success;
                obj.data = docs;
                this.createResponse.success(res, obj);
            }
        } catch (error) {
            obj.httpStatusCode = httpStatus.internalServerError;
            obj.appCode = appCode.error;
            obj.message = "Error Fetching User.";
            logger.error(`..Error : ${error}.....`);
            this.createResponse.error(res, obj);
        }
    };

    //filter object
    searchByGroup = async (req: Request, res: Response, next: NextFunction) => {
        let obj = new ResponseMessage();
        try {
            let group = req.params.group;
            let docs = await this.userService.searchByGroup(group);
            if (docs) {
                obj.httpStatusCode = httpStatus.ok;
                obj.appCode = appCode.success;
                obj.data = docs;
                this.createResponse.success(res, obj);
            }
        } catch (error) {
            obj.httpStatusCode = httpStatus.internalServerError;
            obj.appCode = appCode.error;
            obj.message = "Error Fetching User.";
            logger.error(`..Error : ${error}.....`);
            this.createResponse.error(res, obj);
        }
    };
}
