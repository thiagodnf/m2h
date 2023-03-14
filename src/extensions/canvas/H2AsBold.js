export default function H2AsBold() {

    return [{
        type: "output",
        filter: function (text, converter, options) {

            if (!options.m2hEnableCanvas) {
                return text;
            }

            var regex = new RegExp(/<h2(.*?)>(.*?)<\/h2>/, "gm");

            text = text.replace(regex, function (match, g1, g2) {

                return `<h2 class='ui-priority-primary' ${g1}>${g2}</h2>`;
            });

            return text;
        }
    }];
};
