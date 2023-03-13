import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return correct primary alert", async () => {

    let md = `[Alert][primary]
    This is a paragraph
    [/Alert]`;

    let expected = "<div class=\"alert alert-primary\">This is a paragraph</div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct warning alert", async () => {

    let md = `[Alert][warning]
    This is a paragraph
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning\">This is a paragraph</div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct alert with highlight", async () => {

    let md = `[Alert][warning]
    This is a ==paragraph==
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning\">This is a <mark>paragraph</mark></div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct alert with html tags", async () => {

    let md = `[Alert][warning]
    <strong>bold</strong>
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning\"><strong>bold</strong></div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct alert with additional html classes", async () => {

    let md = `[Alert][warning][red]
    text
    [/Alert]`;

    let expected = "<div class=\"alert alert-warning red\">text</div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct alert when boostrap is not enabled", async () => {

    m2h = new M2H({ m2hEnableBootstrap: false });

    let md = `[Alert][primary]This is a paragraph[/Alert]`;

    let expected = "<p>[Alert][primary]This is a paragraph[/Alert]</p>"

    expect(m2h.parse(md).html).toBe(expected);
});
