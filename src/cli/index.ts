#!/usr/bin/env node
import { Command } from "commander";
import { loadDesign } from "../parser/designLoader";

const program = new Command();

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
      const design = loadDesign(module);
      console.log("=== Design Loaded Successfully ===");
      console.log(JSON.stringify(design, null, 2));
    } catch (err: any) {
      console.error("Error:", err.message);
      process.exit(1);
    }
  });

program.parse();
