import hljs from "highlight.js";

export default function Code() {

    function unescapeHtml(str) {

        str = str.replace(/&lt;/g, "<");
        str = str.replace(/&gt;/g, ">");
        str = str.replace(/&quot;/g, "\"");
        str = str.replace(/&#39;/g, "'");
        str = str.replace(/&amp;/g, "&");

        return str;
    }

    return [{
        type: "output",
        filter: function (text) {

            var regex = new RegExp(/<code class="(.*)">((\n|\r|.)*?)<\/code>/, "gm");

            text = text.replace(regex, function (match, classes, code) {

                code = unescapeHtml(code);

                const language = classes.replace(/language-(.*)/g, "").trim();

                let html = hljs.highlight(code, { language }).value;

                return `<code class='${classes}'>${html}</code>`;
            });

            return text;
        }
    }];
}
