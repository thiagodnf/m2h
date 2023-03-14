import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return correct primary badge", async () => {

    let md = `[Badge][primary]primary[/Badge]`;

    let expected = "<p><span class=\"badge text-bg-primary\">primary</span></p>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct warning badge", async () => {

    let md = `[Badge][warning]warning[/Badge]`;

    let expected = "<p><span class=\"badge text-bg-warning\">warning</span></p>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct badge in a paragraph", async () => {

    let md = `Here is a [Badge][primary]Hey[/Badge] badge`;

    let expected = "<p>Here is a <span class=\"badge text-bg-primary\">Hey</span> badge</p>";

    expect(m2h.parse(md).html).toBe(expected);
});

// test("should return correct alert with html tags", async () => {

//     let md = `[Alert][warning]
//     <strong>bold</strong>
//     [/Alert]`;

//     let expected = "<div class=\"alert alert-warning\"><strong>bold</strong></div>"

//     expect(m2h.parse(md).html).toBe(expected);
// });

// test("should return correct alert with additional html classes", async () => {

//     let md = `[Alert][warning][red]
//     text
//     [/Alert]`;

//     let expected = "<div class=\"alert alert-warning red\">text</div>"

//     expect(m2h.parse(md).html).toBe(expected);
// });

// test("should return correct alert when boostrap is not enabled", async () => {

//     m2h = new M2H({ m2hEnableBootstrap: false });

//     let md = `[Alert][primary]This is a paragraph[/Alert]`;

//     let expected = "<p>[Alert][primary]This is a paragraph[/Alert]</p>"

//     expect(m2h.parse(md).html).toBe(expected);
// });
