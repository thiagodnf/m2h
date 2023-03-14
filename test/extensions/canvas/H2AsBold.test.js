import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return the correct h2", async () => {

    let md = "## Heading 2";
    let expected = "<h2 class=\"ui-priority-primary\" id=\"heading-2\">Heading 2</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct output when canvas is not enabled", async () => {

    m2h = new M2H({ m2hEnableCanvas: false });

    let md = "## Heading 2";
    let expected = "<h2 id=\"heading-2\">Heading 2</h2>"

    expect(m2h.parse(md).html).toBe(expected);
});
