import M2H from "../src/M2H";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return null if input is not valid", async () => {

    expect(m2h.parse()).toBe(null);
    expect(m2h.parse("")).toBe(null);
    expect(m2h.parse(null)).toBe(null);
    expect(m2h.parse(undefined)).toBe(null);
});

test("should return text in bold paragraph", async () => {

    expect(m2h.parse("**text**").html).toBe("<p><strong>text</strong></p>");
});

test("should return the correct html with inline css from css", async () => {

    let scss = `
        p {
            color: red;
        }
    `;

    expect(m2h.parse("text", scss).html).toBe("<p style=\"color: red;\">text</p>");
});

test("should return the correct html with inline css from sass", async () => {

    let scss = `
        $color: red;
        p {
            color: $color;
        }
    `;

    expect(m2h.parse("text", scss, true).html).toBe("<p style=\"color: red;\">text</p>");
});

test("should return correct card with no body", async () => {

    let md = `
        [Card]
        This is the body
        [/Card]
    `.replace(/^\s+/gm, "");

    expect(m2h.parse(md).html).toBe("<div class=\"card\"><p>This is the body</p></div>");
});

test("should return correct card with body", async () => {

    let md = `
        [Card]
        [CardBody]
        This is the body
        [/CardBody]
        [/Card]
    `.replace(/^\s+/gm, "");

    expect(m2h.parse(md).html).toBe("<div class=\"card\"><div class=\"card-body\"><p>This is the body</p></div></div>");
});

test("should return correct card with body", async () => {

    let md = `
        [Card]
        [CardHeader]
        Header
        [/CardHeader]
        [CardBody]
        This is the body
        [/CardBody]
        [/Card]
    `.replace(/^\s+/gm, "");

    expect(m2h.parse(md).html).toBe("<div class=\"card\"><div class=\"card-header\">Header</div>\n<div class=\"card-body\"><p>This is the body</p></div></div>");
});

