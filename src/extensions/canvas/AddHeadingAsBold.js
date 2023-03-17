export default function AddHeadingAsBold() {

    return [{
        type: "output",
        filter: function (text, converter, options) {

            if (!options.m2hAddHeadingAsBold || options.m2hAddHeadingAsBold.length == 0) {
                return text;
            }

            var regex = new RegExp(/<h([123456]+)\s+(.*?)>(.*?)<\/h([123456]+)>/, "gm");

            text = text.replace(regex, function (match, level, attributes, content) {

                level = parseInt(level);

                if (!options.m2hAddHeadingAsBold.includes(level)) {
                    return text;
                }

                return `<h${level} class='ui-priority-primary' ${attributes}>${content}</h${level}>`;
            });

            return text;
        }
    }];
}
