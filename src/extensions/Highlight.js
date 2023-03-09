export default function Highlight() {

    return [{
        type: "lang",
        regex: /==(.*)==/gm,
        replace: "<mark>$1</mark>"
    }];
};
