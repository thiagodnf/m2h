import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return correct primary alert", async () => {

    let md = `[Alert][primary]
    This is a paragraph
    [/Alert]`;

    let expected = "<div class=\"alert alert-primary\" role=\"alert\">This is a paragraph</div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct warning alert", async () => {

    let md = `[Alert][warning]
    This is a paragraph
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning\" role=\"alert\">This is a paragraph</div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct alert with highlight", async () => {

    let md = `[Alert][warning]
    This is a ==paragraph==
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning\" role=\"alert\">This is a <mark>paragraph</mark></div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct alert with html tags", async () => {

    let md = `[Alert][warning]
    <strong>bold</strong>
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning\" role=\"alert\"><strong>bold</strong></div>"

    expect(m2h.parse(md).html).toBe(expected);
});
