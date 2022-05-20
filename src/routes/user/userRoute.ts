import Types from "../../config/types";
import UserController from "../../controllers/user/userController";
import express = require("express");
import { Container } from "inversify";

export class UserRoutes {
    public static configureRoutes(
        app: express.Application,
        container: Container
    ): void {
        const _usersController = container.get<UserController>(
            Types.UserController
        );
        app.get("/", _usersController.getAllUser);
        app.get("/user/:id", _usersController.getUserById);
        app.get("/search/:group", _usersController.searchByGroup);
    }
}
