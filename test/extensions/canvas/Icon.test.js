import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return the correct icon", async () => {

    let md = "[Icon][alert]";
    let expected = "<p><i class=\"icon-alert\"></i></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct output when canvas is not enabled", async () => {

    m2h = new M2H({ m2hEnableCanvasIcon: false });

    let md = "[Icon][alert]";
    let expected = "<p>[Icon][alert]</p>";

    expect(m2h.parse(md).html).toBe(expected);
});
