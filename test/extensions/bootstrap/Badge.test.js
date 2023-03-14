import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return correct primary badge", async () => {

    let md = "[Badge][primary]primary[/Badge]";

    let expected = "<p><span class=\"badge text-bg-primary\">primary</span></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct warning badge", async () => {

    let md = "[Badge][warning]warning[/Badge]";

    let expected = "<p><span class=\"badge text-bg-warning\">warning</span></p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct badge in a paragraph", async () => {

    let md = "Here is a [Badge][primary]Hey[/Badge] badge";

    let expected = "<p>Here is a <span class=\"badge text-bg-primary\">Hey</span> badge</p>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct badge when boostrap is not enabled", async () => {

    m2h = new M2H({ m2hEnableBootstrap: false });

    let md = "[Badge][warning]0[/Badge]";

    let expected = "<p>[Badge][warning]0[/Badge]</p>";

    expect(m2h.parse(md).html).toBe(expected);
});
