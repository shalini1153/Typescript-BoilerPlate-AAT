import { Container } from "inversify";
import Types from "./types";
import { IUserService, UserService } from "../services/user/userService";
import UserController from "../controllers/user/userController";

const container: Container = new Container();

//Controller
container.bind<UserController>(Types.UserController).to(UserController);

// Services
container
    .bind<IUserService>(Types.UserService)
    .to(UserService)
    .inSingletonScope();

function getContainer<T>(type: any) {
    return container.get<T>(type);
}

export { container, getContainer };
