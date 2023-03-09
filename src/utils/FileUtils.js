import fs from "fs";

export default class FileUtils {

    static readFileContent(filePath, encoding = "utf-8") {

        return fs.readFileSync(filePath, { encoding });
    }
}
