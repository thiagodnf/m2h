export default function Grid() {

    let Column = {
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableCanvasGrid) {
                return text;
            }

            let regex = new RegExp(/\[Column\]((\n|\r|.)*?)\[\/Column\]/, "gm");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                return `<div class="col-xs"><div class="styleguide-section__grid-demo-element">${content}</div></div>`;
            });

            return text;
        }
    };

    let Grid = {
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableCanvasGrid) {
                return text;
            }

            let regex = new RegExp(/\[Grid\]((\n|\r|.)*?)\[\/Grid\]/, "gm");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                return `<div class="content-box"><div class="grid-row">${content}</div></div>`;
            });

            return text;
        }
    };

    return [Column, Grid];
}
