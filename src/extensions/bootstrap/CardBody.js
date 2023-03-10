export default function CardBody() {

    return [{
        type: "lang",
        filter: function (text, converter) {

            var regex = new RegExp(/\[CardBody\]((\n|\r|.)*?)\[\/CardBody\]/, "gm");

            text = text.trim().replace(regex, function (match, content) {

                content = converter.makeHtml(content.trim());

                return `<div class="card-body">${content}</div>`;
            });

            return text;
        }
    }];
};
