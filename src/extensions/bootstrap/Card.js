export default function Card() {

    return [{
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
};
