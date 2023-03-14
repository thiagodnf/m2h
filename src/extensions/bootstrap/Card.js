export default function Card() {

    let CardHeader = {
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
    };

    let CardBody = {
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableBootstrap) {
                return text;
            }

            let regex = new RegExp(/\[CardBody\]((\n|\r|.)*?)\[\/CardBody\]/, "gm");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                return `<div class="card-body">${content}</div>`;
            });

            return text;
        }
    };

    return [CardHeader, CardBody, {
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableBootstrap) {
                return text;
            }

            var regex = new RegExp(/\[Card\]((\n|\r|.)*?)\[\/Card\]/, "gm");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                return `<div class="card">${content}</div>`;
            });

            return text;
        }
    }];
}
