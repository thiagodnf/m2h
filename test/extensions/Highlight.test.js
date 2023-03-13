import M2H from "../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return the correct highlight for simple input", async () => {

    let md = "==test==";
    let expected = "<p><mark>test</mark></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return the correct highlight when it has a bold text", async () => {

    let md = "==text1 and **text2**==";
    let expected = "<p><mark>text1 and <strong>text2</strong></mark></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return the correct highlight when it is part of a bold text", async () => {

    let md = "**text1 and ==text2==**";
    let expected = "<p><strong>text1 and <mark>text2</mark></strong></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return the correct highlight when it is part of a paragraph", async () => {

    let md = "text0 and text1 and ==text3==";
    let expected = "<p>text0 and text1 and <mark>text3</mark></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return the correct highlighted  when it has more than one text to hightlight", async () => {

    let md = "text0 ==and== text1 ==and== text2";
    let expected = "<p>text0 <mark>and</mark> text1 <mark>and</mark> text2</p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct higlighted text with css", async () => {

    let scss = `
        $color: red;
        mark {
            color: $color;
        }
    `;

    let md = "==text==";
    let expected = "<p><mark style=\"color: red;\">text</mark></p>";

    expect(m2h.parse(md, scss, true).html).toBe(expected);
});
