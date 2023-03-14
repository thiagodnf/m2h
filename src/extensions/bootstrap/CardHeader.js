export default function CardHeader() {

    return [{
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableBootstrap) {
                return text;
            }

            var regex = new RegExp(/\[CardHeader\]((\n|\r|.)*?)\[\/CardHeader\]/, "gm");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                return `<div class="card-header">${content}</div>`;
            });

            return text;
        }
    }];
};
