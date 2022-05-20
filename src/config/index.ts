
import * as _ from "lodash";
import { config as sharedConfig } from "./shared";

 const configFactory = (() => {
   let appConfig;
  const enviroment: string = process.env.NODE_ENV || " ";
  try {
    try {
         appConfig = require(`./${enviroment}`).default;
    } catch (err) {
      throw new Error(`${enviroment} - Config File not found....`);
    }

    const config = _.merge(sharedConfig, appConfig);
    return Object.freeze(config );
  } catch (error) {
    throw error;
  }
})();

export default configFactory;





// const enviroment: string = process.env.NODE_ENV || " ";
// const config = (async ()  => {
//     const appConfig = await import(`./${enviroment}`);
//     return appConfig;
// })();

// export default config;
