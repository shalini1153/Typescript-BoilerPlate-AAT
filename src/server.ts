import { Application } from "express";
import http, { Server as httpServer } from "http";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import config from "./config";
import logger from "./core/logger";

const PORT: number = process.env.PORT || config.port;
const HOST: number = process.env.HOST || config.host;

const application: Application = new app().init();
const server: httpServer = http.createServer(application);

const listen = (): void => {
    server.listen(PORT, HOST, () => {
        logger.warn(
            `${config.apiName} is running in IP: ${HOST}  PORT : ${PORT}`
        );
        logger.info(`Worker ${process.pid} started`);
    });
};

const stopServer = (): void => {};

const startServer = (): void => {
    listen();
    // *** If Db connection SuccessFul then Start the Server Else Shutdown
};

export { startServer, stopServer };
