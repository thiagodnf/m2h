import M2H from "../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should add numbers for h1", async () => {

    m2h = new M2H({ m2hAddHeadingNumbers: true , m2hAddHeadingNumbersStartLevel: false});

    let md = "# Heading";
    let expected = "<h1 id=\"heading\">1. Heading</h1>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should add numbers for h1 and h2 and h3", async () => {

    m2h = new M2H({ m2hAddHeadingNumbers: true });

    let md = "# Heading 1\n## Heading 2\n### Heading 3";
    let expected = "<h1 id=\"heading-1\">1. Heading 1</h1>\n<h2 id=\"heading-2\">1.1. Heading 2</h2>\n<h3 id=\"heading-3\">1.1.1. Heading 3</h3>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should add numbers for h2 when this is the level start", async () => {

    m2h = new M2H({ m2hAddHeadingNumbers: true, m2hAddHeadingNumbersStartLevel: 2 });

    let md = "## Heading";
    let expected = "<h2 id=\"heading\">1. Heading</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should add numbers for h2 when this is the level start", async () => {

    m2h = new M2H({ m2hAddHeadingNumbers: true, m2hAddHeadingNumbersStartLevel: 2 });

    let md = "# Heading 1\n## Heading 2";
    let expected = "<h1 id=\"heading-1\">Heading 1</h1>\n<h2 id=\"heading-2\">1. Heading 2</h2>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should add numbers for h3 when this is the level start", async () => {

    m2h = new M2H({ m2hAddHeadingNumbers: true, m2hAddHeadingNumbersStartLevel: 3 });

    let md = "# Heading 1\n## Heading 2\n### Heading 3";
    let expected = "<h1 id=\"heading-1\">Heading 1</h1>\n<h2 id=\"heading-2\">Heading 2</h2>\n<h3 id=\"heading-3\">1. Heading 3</h3>";

    expect(m2h.parse(md).html).toBe(expected);
});
