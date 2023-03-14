import M2H from "../../src/M2H.js"

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return the h2 as bold", async () => {

    m2h = new M2H({ m2hAddHeadingAsBold: [2] });

    let md = "## Heading";
    let expected = "<h2 class=\"ui-priority-primary\" id=\"heading\">Heading</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return the h1 and h2 as bold", async () => {

    m2h = new M2H({ m2hAddHeadingAsBold: [1, 2] });

    let md = "# Heading 1\n## Heading 2";
    let expected = "<h1 class=\"ui-priority-primary\" id=\"heading-1\">Heading 1</h1>\n<h2 class=\"ui-priority-primary\" id=\"heading-2\">Heading 2</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should not add because array is empty", async () => {

    m2h = new M2H({ m2hAddHeadingAsBold: [] });

    let md = "## Heading";
    let expected = "<h2 id=\"heading\">Heading</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should not add because the settings is null", async () => {

    m2h = new M2H({ m2hAddHeadingAsBold: null });

    let md = "## Heading";
    let expected = "<h2 id=\"heading\">Heading</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should not add because there is no h3", async () => {

    m2h = new M2H({ m2hAddHeadingAsBold: [3] });

    let md = "## Heading";
    let expected = "<h2 id=\"heading\">Heading</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

