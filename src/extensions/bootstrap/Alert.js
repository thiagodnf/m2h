export default function Alert() {

    return [{
        type: "lang",
        filter: function (text, converter) {

            var regex = new RegExp(/\[Alert\]\[(.*)\]((\n|\r|.)*?)\[\/Alert\]/, "gm");

            text = text.trim().replace(regex, function (match, type, content) {

                content = converter.makeHtml(content.trim());

                content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                return `<div class="alert alert-${type}" role="alert">${content}</div>`;
            });

            return text;
        }
    }];
};
