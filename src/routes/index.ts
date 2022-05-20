import express, { Router } from "express";
import { UserRoutes } from "./user/userRoute";
import { Container } from "inversify";

export class RouteBinder {
    public static configureRoutes(
        app: express.Application,
        container: Container
    ): void {
        UserRoutes.configureRoutes(app, container);
    }
}
