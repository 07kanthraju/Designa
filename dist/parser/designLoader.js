"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDesign = loadDesign;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
function loadDesign(moduleName) {
    const filePath = path_1.default.join(process.cwd(), ".designa", moduleName, `${moduleName.toLowerCase()}.yaml`);
    if (!fs_1.default.existsSync(filePath)) {
        throw new Error(`Design file not found at ${filePath}`);
    }
    const fileContent = fs_1.default.readFileSync(filePath, "utf-8");
    return js_yaml_1.default.load(fileContent);
}
