import "reflect-metadata";
import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "./core/logger";
import { exceptionHandling } from "./core/middleware/ExceptionHandling";
import { resourceNotFound } from "./core/middleware/ResourcesNotFound";
import { RouteBinder } from "./routes";
import { container } from "./config/inversify";
// import { router } from "./routes";

export default class App {
    private initRoutes(app: Application) {
        RouteBinder.configureRoutes(app, container);
        // app.use(router);
        logger.info("########## Routes initialized ###########");
    }

    private initMiddleware(app: Application) {
        app.use(exceptionHandling);
        app.use(resourceNotFound);
        logger.info("########## Middleware initialized ###########");
    }

    private initSecurity(app: Application) {
        app.use(cors());
        app.use(helmet());
        logger.info("########## Security initialized ###########");
    }

    private initExternalModules(app: Application) {
        app.use(morgan("dev"));
        logger.info("########## External Modules initialized ###########");
    }

    private initGlobalVariable() {
        (global as any).isProduction = process.env.NODE_ENV; // @isProduction : global varible
        logger.info("########## Global Variables initialized ###########");
    }

    public init(): Application {
        const app: Application = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        this.initSecurity(app);
        this.initGlobalVariable();
        this.initRoutes(app);
        this.initExternalModules(app);
        this.initMiddleware(app);
        return app;
    }
}
