import showdown from "showdown";
import juice from "juice";
import sass from "sass";

import Highlight from "./extensions/Highlight.js";
import Code from "./extensions/Code.js";
import Alert from "./extensions/bootstrap/Alert.js";
import Card from "./extensions/bootstrap/Card.js";
import CardBody from "./extensions/bootstrap/CardBody.js";
import CardHeader from "./extensions/bootstrap/CardHeader.js";

let defaults = {
    ghCompatibleHeaderId: true, // Generate heading IDs compatible with GitHub style
    customizedHeaderId: true,   // Set custom ID for a heading.
    metadata: true,             // Enable support for document metadata (front-matter)
    tables: true,               // Enable support for tables synta
    strikethrough: true,        // Enable support for strikethrough,
    simplifiedAutoLink: true,   // Enable automatic linking for plain text URLs.
    extensions: [Highlight, Code, Alert, Card, CardBody, CardHeader]
}

/**
 * This is the converter class
 * @author Thiago Ferreira
 */
export default class M2H {

    /**
     * Constructor
     *
     * @param {object} settings this is the optional settings
     */
    constructor(settings = {}) {
        this.settings = settings;
        this.converter = new showdown.Converter({ ...defaults, ...settings });
    }

    /**
     * @param {string} content string as markdown. Default is empty string
     * @return content as HTML
     */
    parse(content, css = "", isSass = false) {

        if (!content) {
            return null;
        }

        let html = this.converter.makeHtml(content);
        let metadata = this.converter.getMetadata();

        if (isSass) {
            css = sass.compileString(css).css.toString();
        }

        html = juice(`<style>${css}</style>${html}`, { preserveImportant: true });

        return { html, metadata };
    }
}
