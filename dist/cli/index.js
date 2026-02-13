#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const designLoader_1 = require("../parser/designLoader");
const program = new commander_1.Command();
program
    .name("designa")
    .description("Design-driven code synthesis engine")
    .version("0.1.0");
program
    .command("generate")
    .argument("<module>")
    .description("Generate module from design spec")
    .action((module) => {
    try {
        const design = (0, designLoader_1.loadDesign)(module);
        console.log("=== Design Loaded Successfully ===");
        console.log(JSON.stringify(design, null, 2));
    }
    catch (err) {
        console.error("Error:", err.message);
        process.exit(1);
    }
});
program.parse();
