import fs from "fs";
import path from "path";

export default class FileUtils {

    static readFileContent(filePath, encoding = "utf-8") {

        return fs.readFileSync(filePath, { encoding });
    }

    static parse(filePath) {
        return path.parse(filePath);
    }

    static getFileExtension(filePath){
        return FileUtils.parse(filePath).ext;
    }

    static isSass(filePath){
        return FileUtils.getFileExtension(filePath) === ".scss";
    }
}
