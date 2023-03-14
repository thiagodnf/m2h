export default function Icon() {

    // return [{
    //     type: "lang",
    //     regex: /\[icon\]\[(.*)\]/g,
    //     replace: "<i class=\"icon-$1\"></i>"
    // }];

    return [{
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableCanvas) {
                return text;
            }

            var regex = new RegExp(/\[icon\]\[(.*?)\]/, "gm");

            text = text.replace(regex, function (match, icon) {

                return `<i class=\"icon-${icon}\"></i>`;
            });

            return text;
        }
    }];
};
