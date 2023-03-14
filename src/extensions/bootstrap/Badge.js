export default function Badge() {

    return [{
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableBootstrap) {
                return text;
            }

            var regex = new RegExp(/\[Badge\]\[(.*?)\](?:\[(.*?)\])?(.*?)\[\/Badge\]/, "gm");

            text = text.replace(regex, function (match, type, additionalCls, content) {

                additionalCls = additionalCls || "";

                content = converter.makeHtml(content.trim());

                content = content.replace(/^<p>(.*)<\/p>$/, "$1");

                let cls = `badge text-bg-${type} ${additionalCls}`;

                return `<span class="${cls.trim()}">${content}</span>`;
            });

            return text;
        }
    }];
};
