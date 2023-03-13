export default function Alert() {

    return [{
        type: "lang",
        filter: function (text, converter) {

            var regex = new RegExp(/\[Alert\]\[(.*?)\](?:\[(.*?)\])?((\n|\r|.)*?)\[\/Alert\]/, "gm");

            text = text.trim().replace(regex, function (match, type, additionalCls, content) {

                additionalCls = additionalCls || "";

                content = converter.makeHtml(content.trim());

                content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                let cls = `alert alert-${type} ${additionalCls}`;

                return `<div class="${cls.trim()}">${content}</div>`;
            });

            return text;
        }
    }];
};
