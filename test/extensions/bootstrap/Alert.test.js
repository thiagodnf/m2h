import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return correct alert", async () => {

    let md = `[Alert][primary]
    This is a paragraph
    [/Alert]`;

    expect(m2h.parse(md).html).toBe("<div class=\"alert alert-primary\" role=\"alert\">This is a paragraph</div>");
});
