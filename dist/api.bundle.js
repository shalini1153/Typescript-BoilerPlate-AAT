/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Server.ts":
/*!***********************!*\
  !*** ./src/Server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.stopServer = exports.startServer = void 0;\r\nconst http_1 = __importDefault(__webpack_require__(/*! http */ \"http\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv_1.default.config();\r\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\r\nconst config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/config/index.ts\"));\r\nconst logger_1 = __importDefault(__webpack_require__(/*! ./core/logger */ \"./src/core/logger.ts\"));\r\nconst PORT = process.env.PORT || config_1.default.port;\r\nconst HOST = process.env.HOST || config_1.default.host;\r\nconst application = new app_1.default().init();\r\nconst server = http_1.default.createServer(application);\r\nconst listen = () => {\r\n    server.listen(PORT, HOST, () => {\r\n        logger_1.default.warn(`${config_1.default.apiName} is running in IP: ${HOST}  PORT : ${PORT}`);\r\n        logger_1.default.info(`Worker ${process.pid} started`);\r\n    });\r\n};\r\nconst stopServer = () => { };\r\nexports.stopServer = stopServer;\r\nconst startServer = () => {\r\n    listen();\r\n    // *** If Db connection SuccessFul then Start the Server Else Shutdown\r\n};\r\nexports.startServer = startServer;\r\n\n\n//# sourceURL=webpack:///./src/Server.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nconst morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nconst logger_1 = __importDefault(__webpack_require__(/*! ./core/logger */ \"./src/core/logger.ts\"));\r\nconst ExceptionHandling_1 = __webpack_require__(/*! ./core/middleware/ExceptionHandling */ \"./src/core/middleware/ExceptionHandling.ts\");\r\nconst ResourcesNotFound_1 = __webpack_require__(/*! ./core/middleware/ResourcesNotFound */ \"./src/core/middleware/ResourcesNotFound.ts\");\r\nconst routes_1 = __webpack_require__(/*! ./routes */ \"./src/routes/index.ts\");\r\nconst inversify_1 = __webpack_require__(/*! ./config/inversify */ \"./src/config/inversify.ts\");\r\n// import { router } from \"./routes\";\r\nclass App {\r\n    initRoutes(app) {\r\n        routes_1.RouteBinder.configureRoutes(app, inversify_1.container);\r\n        // app.use(router);\r\n        logger_1.default.info(\"########## Routes initialized ###########\");\r\n    }\r\n    initMiddleware(app) {\r\n        app.use(ExceptionHandling_1.exceptionHandling);\r\n        app.use(ResourcesNotFound_1.resourceNotFound);\r\n        logger_1.default.info(\"########## Middleware initialized ###########\");\r\n    }\r\n    initSecurity(app) {\r\n        app.use(cors_1.default());\r\n        app.use(helmet_1.default());\r\n        logger_1.default.info(\"########## Security initialized ###########\");\r\n    }\r\n    initExternalModules(app) {\r\n        app.use(morgan_1.default(\"dev\"));\r\n        logger_1.default.info(\"########## External Modules initialized ###########\");\r\n    }\r\n    initGlobalVariable() {\r\n        global.isProduction = \"development\"; // @isProduction : global varible\r\n        logger_1.default.info(\"########## Global Variables initialized ###########\");\r\n    }\r\n    init() {\r\n        const app = express_1.default();\r\n        app.use(body_parser_1.default.json());\r\n        app.use(body_parser_1.default.urlencoded({ extended: true }));\r\n        this.initSecurity(app);\r\n        this.initGlobalVariable();\r\n        this.initRoutes(app);\r\n        this.initExternalModules(app);\r\n        this.initMiddleware(app);\r\n        return app;\r\n    }\r\n}\r\nexports.default = App;\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/config sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/config sync ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./src/config/index.ts\",\n\t\"./development\": \"./src/config/development.ts\",\n\t\"./development.ts\": \"./src/config/development.ts\",\n\t\"./index\": \"./src/config/index.ts\",\n\t\"./index.ts\": \"./src/config/index.ts\",\n\t\"./inversify\": \"./src/config/inversify.ts\",\n\t\"./inversify.ts\": \"./src/config/inversify.ts\",\n\t\"./shared\": \"./src/config/shared.ts\",\n\t\"./shared.ts\": \"./src/config/shared.ts\",\n\t\"./types\": \"./src/config/types.ts\",\n\t\"./types.ts\": \"./src/config/types.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/config sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./src/config_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./src/config/development.ts":
/*!***********************************!*\
  !*** ./src/config/development.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/config/development.ts?");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst _ = __importStar(__webpack_require__(/*! lodash */ \"lodash\"));\r\nconst shared_1 = __webpack_require__(/*! ./shared */ \"./src/config/shared.ts\");\r\nconst configFactory = (() => {\r\n    let appConfig;\r\n    const enviroment = \"development\" || false;\r\n    try {\r\n        try {\r\n            appConfig = __webpack_require__(\"./src/config sync recursive ^\\\\.\\\\/.*$\")(`./${enviroment}`).default;\r\n        }\r\n        catch (err) {\r\n            throw new Error(`${enviroment} - Config File not found....`);\r\n        }\r\n        const config = _.merge(shared_1.config, appConfig);\r\n        return Object.freeze(config);\r\n    }\r\n    catch (error) {\r\n        throw error;\r\n    }\r\n})();\r\nexports.default = configFactory;\r\n// const enviroment: string = process.env.NODE_ENV || \" \";\r\n// const config = (async ()  => {\r\n//     const appConfig = await import(`./${enviroment}`);\r\n//     return appConfig;\r\n// })();\r\n// export default config;\r\n\n\n//# sourceURL=webpack:///./src/config/index.ts?");

/***/ }),

/***/ "./src/config/inversify.ts":
/*!*********************************!*\
  !*** ./src/config/inversify.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getContainer = exports.container = void 0;\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst types_1 = __importDefault(__webpack_require__(/*! ./types */ \"./src/config/types.ts\"));\r\nconst userService_1 = __webpack_require__(/*! ../services/user/userService */ \"./src/services/user/userService.ts\");\r\nconst userController_1 = __importDefault(__webpack_require__(/*! ../controllers/user/userController */ \"./src/controllers/user/userController.ts\"));\r\nconst container = new inversify_1.Container();\r\nexports.container = container;\r\n//Controller\r\ncontainer.bind(types_1.default.UserController).to(userController_1.default);\r\n// Services\r\ncontainer\r\n    .bind(types_1.default.UserService)\r\n    .to(userService_1.UserService)\r\n    .inSingletonScope();\r\nfunction getContainer(type) {\r\n    return container.get(type);\r\n}\r\nexports.getContainer = getContainer;\r\n\n\n//# sourceURL=webpack:///./src/config/inversify.ts?");

/***/ }),

/***/ "./src/config/shared.ts":
/*!******************************!*\
  !*** ./src/config/shared.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// All configurations will extend these options\r\n// ============================================\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.config = void 0;\r\nexports.config = {\r\n    apiName: \"aat\",\r\n    env: \"development\",\r\n    corsoptions: {\r\n        origin: process.env.CORSURL,\r\n        methods: \"GET,POST\",\r\n        allowedHeaders: \"Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token,x-client-secret, Authorization\",\r\n    },\r\n    // Server port\r\n    port: process.env.PORT || 8000,\r\n    // Server IP\r\n    ip: process.env.IP || \"0.0.0.0\",\r\n    // Domain (e.g. https://localhost)\r\n    domain: process.env.DOMAIN,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/config/shared.ts?");

/***/ }),

/***/ "./src/config/types.ts":
/*!*****************************!*\
  !*** ./src/config/types.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Types = {\r\n    UserService: Symbol.for(\"IUserService\"),\r\n    UserController: Symbol(\"UserController\"),\r\n};\r\nexports.default = Types;\r\n\n\n//# sourceURL=webpack:///./src/config/types.ts?");

/***/ }),

/***/ "./src/constants/ResponseConstant.ts":
/*!*******************************************!*\
  !*** ./src/constants/ResponseConstant.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.users = void 0;\r\nexports.users = [\r\n    {\r\n        group_name: \"portal_customization\",\r\n        id: 1,\r\n        name: \"Shalini Jain\",\r\n        email: \"s.jain@test.com\",\r\n        address: \"7778897584\",\r\n        age: 25,\r\n        gender: \"Female\",\r\n    },\r\n    {\r\n        group_name: \"portal_customization\",\r\n        id: 2,\r\n        name: \"Dhruv Verma\",\r\n        email: \"d.verma@test.com\",\r\n        address: \"\",\r\n        phoneNo: \"7776685782\",\r\n        age: 24,\r\n        gender: \"Male\",\r\n    },\r\n    {\r\n        group_name: \"organizer\",\r\n        id: 3,\r\n        name: \"Prajwal Murthy\",\r\n        email: \"p.murthy@test.com\",\r\n        address: \"\",\r\n        phoneNo: \"7776685782\",\r\n        age: 24,\r\n        gender: \"Male\",\r\n    },\r\n    {\r\n        group_name: \"organizer\",\r\n        id: 4,\r\n        name: \"Avneet Singh\",\r\n        email: \"a.singh@test.com\",\r\n        address: \"\",\r\n        phoneNo: \"7776685782\",\r\n        age: 24,\r\n        gender: \"Male\",\r\n    },\r\n    {\r\n        group_name: \"organizer\",\r\n        id: 5,\r\n        name: \"Tushara Reddy\",\r\n        email: \"t.reddy@test.com\",\r\n        address: \"\",\r\n        phoneNo: \"7776685782\",\r\n        age: 28,\r\n        gender: \"Female\",\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/constants/ResponseConstant.ts?");

/***/ }),

/***/ "./src/controllers/user/userController.ts":
/*!************************************************!*\
  !*** ./src/controllers/user/userController.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst types_1 = __importDefault(__webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\"));\r\nconst BaseController_1 = __importDefault(__webpack_require__(/*! ../../core/utility/BaseController */ \"./src/core/utility/BaseController.ts\"));\r\nconst ReponseMessage_1 = __importDefault(__webpack_require__(/*! ../../core/utility/ReponseMessage */ \"./src/core/utility/ReponseMessage.ts\"));\r\nconst ReponseMessage_2 = __importDefault(__webpack_require__(/*! ../../core/utility/ReponseMessage */ \"./src/core/utility/ReponseMessage.ts\"));\r\nconst HttpStatusCode_1 = __webpack_require__(/*! ../../core/constants/HttpStatusCode */ \"./src/core/constants/HttpStatusCode.ts\");\r\nconst AppCode_1 = __webpack_require__(/*! ../../core/constants/AppCode */ \"./src/core/constants/AppCode.ts\");\r\nconst logger_1 = __importDefault(__webpack_require__(/*! ../../core/logger */ \"./src/core/logger.ts\"));\r\nlet UserController = class UserController extends BaseController_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.getAllUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {\r\n            const data = yield this.userService.getAll();\r\n            let obj = new ReponseMessage_1.default(this.httpStatusCode.ok, this.appCode.success, \"\", data);\r\n            this.createResponse.success(res, obj);\r\n        });\r\n        this.getUserById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {\r\n            let obj = new ReponseMessage_2.default();\r\n            try {\r\n                let id = req.params.id;\r\n                let docs = yield this.userService.getUserById(parseInt(id));\r\n                if (docs) {\r\n                    obj.httpStatusCode = HttpStatusCode_1.httpStatus.ok;\r\n                    obj.appCode = AppCode_1.appCode.success;\r\n                    obj.data = docs;\r\n                    this.createResponse.success(res, obj);\r\n                }\r\n            }\r\n            catch (error) {\r\n                obj.httpStatusCode = HttpStatusCode_1.httpStatus.internalServerError;\r\n                obj.appCode = AppCode_1.appCode.error;\r\n                obj.message = \"Error Fetching User.\";\r\n                logger_1.default.error(`..Error : ${error}.....`);\r\n                this.createResponse.error(res, obj);\r\n            }\r\n        });\r\n        //filter object\r\n        this.searchByGroup = (req, res, next) => __awaiter(this, void 0, void 0, function* () {\r\n            let obj = new ReponseMessage_2.default();\r\n            try {\r\n                let group = req.params.group;\r\n                let docs = yield this.userService.searchByGroup(group);\r\n                if (docs) {\r\n                    obj.httpStatusCode = HttpStatusCode_1.httpStatus.ok;\r\n                    obj.appCode = AppCode_1.appCode.success;\r\n                    obj.data = docs;\r\n                    this.createResponse.success(res, obj);\r\n                }\r\n            }\r\n            catch (error) {\r\n                obj.httpStatusCode = HttpStatusCode_1.httpStatus.internalServerError;\r\n                obj.appCode = AppCode_1.appCode.error;\r\n                obj.message = \"Error Fetching User.\";\r\n                logger_1.default.error(`..Error : ${error}.....`);\r\n                this.createResponse.error(res, obj);\r\n            }\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    inversify_1.inject(types_1.default.UserService),\r\n    __metadata(\"design:type\", Object)\r\n], UserController.prototype, \"userService\", void 0);\r\nUserController = __decorate([\r\n    inversify_1.injectable()\r\n], UserController);\r\nexports.default = UserController;\r\n\n\n//# sourceURL=webpack:///./src/controllers/user/userController.ts?");

/***/ }),

/***/ "./src/core/constants/AppCode.ts":
/*!***************************************!*\
  !*** ./src/core/constants/AppCode.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.appCode = void 0;\r\nexports.appCode = Object.freeze({\r\n    success: 1,\r\n    error: -1,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/core/constants/AppCode.ts?");

/***/ }),

/***/ "./src/core/constants/HttpStatusCode.ts":
/*!**********************************************!*\
  !*** ./src/core/constants/HttpStatusCode.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.httpStatus = void 0;\r\nexports.httpStatus = Object.freeze({\r\n    ok: 200,\r\n    notFound: 404,\r\n    unAuthorised: 401,\r\n    internalServerError: 500,\r\n    badRequest: 400,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/core/constants/HttpStatusCode.ts?");

/***/ }),

/***/ "./src/core/logger.ts":
/*!****************************!*\
  !*** ./src/core/logger.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst winston_1 = __importDefault(__webpack_require__(/*! winston */ \"winston\"));\r\nclass Logger {\r\n    constructor() {\r\n        this.log = Boolean(process.env.LOG) || false; // Rnd\r\n        this.logger = this.initLogger();\r\n    }\r\n    initLogger() {\r\n        const _logger = winston_1.default.createLogger();\r\n        _logger.add(new winston_1.default.transports.Console({\r\n            format: winston_1.default.format.combine(winston_1.default.format.simple(), winston_1.default.format.colorize({ all: true })),\r\n        }));\r\n        return _logger;\r\n    }\r\n    info(message) {\r\n        if (this.log)\r\n            this.logger.info(message);\r\n    }\r\n    warn(message) {\r\n        if (this.log)\r\n            this.logger.warn(message);\r\n    }\r\n    error(message) {\r\n        if (this.log)\r\n            this.logger.error(message);\r\n    }\r\n    debug(message) {\r\n        if (this.log)\r\n            this.logger.debug(message);\r\n    }\r\n}\r\nexports.default = new Logger();\r\n\n\n//# sourceURL=webpack:///./src/core/logger.ts?");

/***/ }),

/***/ "./src/core/middleware/ExceptionHandling.ts":
/*!**************************************************!*\
  !*** ./src/core/middleware/ExceptionHandling.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.exceptionHandling = void 0;\r\nconst ReponseMessage_1 = __importDefault(__webpack_require__(/*! ../utility/ReponseMessage */ \"./src/core/utility/ReponseMessage.ts\"));\r\nconst AppCode_1 = __webpack_require__(/*! ../constants/AppCode */ \"./src/core/constants/AppCode.ts\");\r\nconst HttpStatusCode_1 = __webpack_require__(/*! ../constants/HttpStatusCode */ \"./src/core/constants/HttpStatusCode.ts\");\r\nconst CreateResponse_1 = __importDefault(__webpack_require__(/*! ../utility/CreateResponse */ \"./src/core/utility/CreateResponse.ts\"));\r\n// const { traceError } = require(\"../utility/helper\");\r\nexports.exceptionHandling = (err, req, res, next) => {\r\n    const createResponse = new CreateResponse_1.default();\r\n    const obj = new ReponseMessage_1.default();\r\n    obj.appCode = AppCode_1.appCode.success;\r\n    obj.httpStatusCode = HttpStatusCode_1.httpStatus.internalServerError;\r\n    obj.message = err.message;\r\n    createResponse.error(res, obj);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/core/middleware/ExceptionHandling.ts?");

/***/ }),

/***/ "./src/core/middleware/ResourcesNotFound.ts":
/*!**************************************************!*\
  !*** ./src/core/middleware/ResourcesNotFound.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.resourceNotFound = void 0;\r\nconst ReponseMessage_1 = __importDefault(__webpack_require__(/*! ../utility/ReponseMessage */ \"./src/core/utility/ReponseMessage.ts\"));\r\nconst AppCode_1 = __webpack_require__(/*! ../constants/AppCode */ \"./src/core/constants/AppCode.ts\");\r\nconst HttpStatusCode_1 = __webpack_require__(/*! ../constants/HttpStatusCode */ \"./src/core/constants/HttpStatusCode.ts\");\r\nconst CreateResponse_1 = __importDefault(__webpack_require__(/*! ../utility/CreateResponse */ \"./src/core/utility/CreateResponse.ts\"));\r\n// ***@ no routes matched from the among register this function order should be last route\r\nexports.resourceNotFound = (req, res, next) => {\r\n    const createResponse = new CreateResponse_1.default();\r\n    const obj = new ReponseMessage_1.default();\r\n    obj.appCode = AppCode_1.appCode.error;\r\n    obj.httpStatusCode = HttpStatusCode_1.httpStatus.notFound;\r\n    obj.message = \"resource not found\";\r\n    res.status(HttpStatusCode_1.httpStatus.notFound).send(obj);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/core/middleware/ResourcesNotFound.ts?");

/***/ }),

/***/ "./src/core/utility/BaseController.ts":
/*!********************************************!*\
  !*** ./src/core/utility/BaseController.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst AppCode_1 = __webpack_require__(/*! ../constants/AppCode */ \"./src/core/constants/AppCode.ts\");\r\nconst HttpStatusCode_1 = __webpack_require__(/*! ../constants/HttpStatusCode */ \"./src/core/constants/HttpStatusCode.ts\");\r\nconst CreateResponse_1 = __importDefault(__webpack_require__(/*! ./CreateResponse */ \"./src/core/utility/CreateResponse.ts\"));\r\nlet BaseController = class BaseController {\r\n};\r\nBaseController = __decorate([\r\n    inversify_1.injectable()\r\n], BaseController);\r\nBaseController.prototype.appCode = AppCode_1.appCode;\r\nBaseController.prototype.httpStatusCode = HttpStatusCode_1.httpStatus;\r\nBaseController.prototype.createResponse = new CreateResponse_1.default();\r\nexports.default = BaseController;\r\n\n\n//# sourceURL=webpack:///./src/core/utility/BaseController.ts?");

/***/ }),

/***/ "./src/core/utility/CreateResponse.ts":
/*!********************************************!*\
  !*** ./src/core/utility/CreateResponse.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst AppCode_1 = __webpack_require__(/*! ../constants/AppCode */ \"./src/core/constants/AppCode.ts\");\r\nconst HttpStatusCode_1 = __webpack_require__(/*! ../constants/HttpStatusCode */ \"./src/core/constants/HttpStatusCode.ts\");\r\nclass CreateResponse {\r\n    success(res, ResponseMessageObj) {\r\n        try {\r\n            if (!ResponseMessageObj.httpStatusCode) {\r\n                ResponseMessageObj.httpStatusCode = HttpStatusCode_1.httpStatus.ok;\r\n            }\r\n            if (!ResponseMessageObj.appCode) {\r\n                ResponseMessageObj.appCode = AppCode_1.appCode.success;\r\n            }\r\n            res.status(HttpStatusCode_1.httpStatus.ok);\r\n            res.send(ResponseMessageObj);\r\n        }\r\n        catch (error) {\r\n            throw error;\r\n        }\r\n    }\r\n    error(res, ResponseMessageObj) {\r\n        try {\r\n            if (!ResponseMessageObj.httpStatusCode) {\r\n                ResponseMessageObj.httpStatusCode =\r\n                    HttpStatusCode_1.httpStatus.internalServerError;\r\n            }\r\n            if (!ResponseMessageObj.appCode) {\r\n                ResponseMessageObj.appCode = AppCode_1.appCode.error;\r\n            }\r\n            res.status(HttpStatusCode_1.httpStatus.internalServerError);\r\n            res.send(ResponseMessageObj);\r\n        }\r\n        catch (error) {\r\n            throw error;\r\n        }\r\n    }\r\n}\r\nexports.default = CreateResponse;\r\n\n\n//# sourceURL=webpack:///./src/core/utility/CreateResponse.ts?");

/***/ }),

/***/ "./src/core/utility/ReponseMessage.ts":
/*!********************************************!*\
  !*** ./src/core/utility/ReponseMessage.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// ****\r\n// ****  @author: Kartik Mani  02-01-2019\r\n// ****  Custom Response format for the Rest Api\r\n// *****\r\n// *****\r\n// ***** @param :\r\n// ****  APP_CODE : -1(error) or 1 (success)\r\n// ****  HTTP_STATUS_CODE : 200/404/500\r\n// ****  MESSAGE : User Defined Message (Success or error)\r\n// ****  Data : Entity\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ResponseMessage {\r\n    constructor(_httpStatusCode, _appCode, _message, _data) {\r\n        this.httpStatusCode = _httpStatusCode || null;\r\n        this.appCode = _appCode || null;\r\n        this.message = _message || \"\";\r\n        this.data = _data || {};\r\n    }\r\n}\r\nexports.default = ResponseMessage; // *** No singleTon\r\n\n\n//# sourceURL=webpack:///./src/core/utility/ReponseMessage.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Server_1 = __webpack_require__(/*! ./Server */ \"./src/Server.ts\");\r\nServer_1.startServer();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RouteBinder = void 0;\r\nconst userRoute_1 = __webpack_require__(/*! ./user/userRoute */ \"./src/routes/user/userRoute.ts\");\r\nclass RouteBinder {\r\n    static configureRoutes(app, container) {\r\n        userRoute_1.UserRoutes.configureRoutes(app, container);\r\n    }\r\n}\r\nexports.RouteBinder = RouteBinder;\r\n\n\n//# sourceURL=webpack:///./src/routes/index.ts?");

/***/ }),

/***/ "./src/routes/user/userRoute.ts":
/*!**************************************!*\
  !*** ./src/routes/user/userRoute.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserRoutes = void 0;\r\nconst types_1 = __importDefault(__webpack_require__(/*! ../../config/types */ \"./src/config/types.ts\"));\r\nclass UserRoutes {\r\n    static configureRoutes(app, container) {\r\n        const _usersController = container.get(types_1.default.UserController);\r\n        app.get(\"/\", _usersController.getAllUser);\r\n        app.get(\"/user/:id\", _usersController.getUserById);\r\n        app.get(\"/search/:group\", _usersController.searchByGroup);\r\n    }\r\n}\r\nexports.UserRoutes = UserRoutes;\r\n\n\n//# sourceURL=webpack:///./src/routes/user/userRoute.ts?");

/***/ }),

/***/ "./src/services/user/userService.ts":
/*!******************************************!*\
  !*** ./src/services/user/userService.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserService = void 0;\r\nconst inversify_1 = __webpack_require__(/*! inversify */ \"inversify\");\r\nconst ResponseConstant_1 = __webpack_require__(/*! ../../constants/ResponseConstant */ \"./src/constants/ResponseConstant.ts\");\r\nlet UserService = class UserService {\r\n    constructor() {\r\n        this.getAll = () => {\r\n            return ResponseConstant_1.users;\r\n        };\r\n        this.getUserById = (id) => {\r\n            return ResponseConstant_1.users.filter(user => {\r\n                return user.id === id;\r\n            })[0];\r\n        };\r\n        this.searchByGroup = (groupName) => {\r\n            return ResponseConstant_1.users.filter(user => {\r\n                return user.group_name === groupName;\r\n            });\r\n        };\r\n    }\r\n};\r\nUserService = __decorate([\r\n    inversify_1.injectable()\r\n], UserService);\r\nexports.UserService = UserService;\r\n\n\n//# sourceURL=webpack:///./src/services/user/userService.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"inversify\");\n\n//# sourceURL=webpack:///external_%22inversify%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");\n\n//# sourceURL=webpack:///external_%22reflect-metadata%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });