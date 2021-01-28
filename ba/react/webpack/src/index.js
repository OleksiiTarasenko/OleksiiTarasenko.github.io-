import AppService from "./modules/app.service";
import { config } from "./modules/config";
import "./style/style.css";
import "./style/header.css";
import "./style/color.scss";

console.log("Hello World:", config.key);
const service = new AppService("Service online");
service.log();

import "./modules/header.component";
