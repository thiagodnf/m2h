import commandLineArgs from "command-line-args";

import M2H from "./src/M2H.js";
import FileUtils from "./src/utils/FileUtils.js";

const optionDefinitions = [
    { name: "src", type: String, defaultOption: true },
    { name: "css", type: String, defaultValue: "", alias: "c" },
    { name: "output", type: String, defaultValue: "html", alias: "o" }
];

const options = commandLineArgs(optionDefinitions);

if (!options.src) {
    throw new Error("The source file is required");
}

let isSass = false;
let cssFileContent = "";
let mdFileContent = FileUtils.readFileContent(options.src);

if (options.css) {
    isSass = FileUtils.isSass(options.css);
    cssFileContent = FileUtils.readFileContent(options.css);
}

const m2h = new M2H();

const parsed = m2h.parse(mdFileContent, cssFileContent, isSass);

if (options.output === "html") {
    console.log(parsed.html);
} else if (options.output === "metadata") {
    console.log(parsed.metadata);
} else if (options.output === "all") {
    console.log(parsed);
}
