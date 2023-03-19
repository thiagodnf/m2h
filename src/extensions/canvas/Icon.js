export default function Icon() {

    return [{
        type: "lang",
        filter: function (text, converter, options) {

            if (!options.m2hEnableCanvasIcon) {
                return text;
            }

            var regex = new RegExp(/\[Icon\]\[(.*?)\]/, "gm");

            text = text.replace(regex, function (match, icon) {

                return `<i class="icon-${icon}"></i>`;
            });

            return text;
        }
    }];
}
