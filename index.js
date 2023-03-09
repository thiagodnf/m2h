import commandLineArgs from "command-line-args";

import M2H from "./src/M2H.js";
import FileUtils from "./src/utils/FileUtils.js";

const optionDefinitions = [
    { name: 'src', type: String, defaultOption: true },
    { name: 'scss', type: String, defaultValue: "" },
    { name: 'output', type: String, defaultValue: "html", alias: 'o' }
]

const options = commandLineArgs(optionDefinitions)

if (!options.src) {
    throw new Error("The source files is required")
}

let scssFileContent = "";
let mdFileContent = FileUtils.readFileContent(options.src)

if (options.scss) {
    scssFileContent = FileUtils.readFileContent(options.scss)
}

const m2h = new M2H();

const parsed = m2h.parse(mdFileContent, scssFileContent);

if (options.output === "html") {
    console.log(parsed.html);
} else if (options.output === "metadata") {
    console.log(parsed.metadata);
} else if (options.output === "all") {
    console.log(parsed);
}
