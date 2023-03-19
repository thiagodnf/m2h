import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return empty grid", async () => {

    let md = "[Grid]\n[/Grid]";
    let expected = "<div class=\"content-box\"><div class=\"grid-row\"></div></div>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return grid with one column", async () => {

    let md = "[Grid]\n[Column]1[/Column]\n[/Grid]";
    let expected = "<div class=\"content-box\"><div class=\"grid-row\"><div class=\"col-xs\"><div class=\"styleguide-section__grid-demo-element\"><p>1</p></div></div></div></div>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return grid with two columns", async () => {

    let md = "[Grid]\n[Column]1[/Column][Column]2[/Column]\n[/Grid]";
    let expected = "<div class=\"content-box\"><div class=\"grid-row\"><div class=\"col-xs\"><div class=\"styleguide-section__grid-demo-element\"><p>1</p></div></div>\n<div class=\"col-xs\"><div class=\"styleguide-section__grid-demo-element\"><p>2</p></div></div></div></div>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should not return", async () => {

    m2h = new M2H({ m2hEnableCanvasGrid: false });

    let md = "[Grid][/Grid]";
    let expected = "<p>[Grid][/Grid]</p>";

    expect(m2h.parse(md).html).toBe(expected);
});
