import M2H from "../../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});

test("should return correct card", async () => {

    let md = "[Card]\n[CardHeader]Header[/CardHeader]\n[CardBody]\nThis is a card\n[/CardBody]\n[/Card]";

    let expected = "<div class=\"card\"><div class=\"card-header\">Header</div>\n<div class=\"card-body\"><p>This is a card</p></div></div>"

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct card when boostrap is not enabled", async () => {

    m2h = new M2H({ m2hEnableBootstrap: false });

    let md = `[Card]This is a card[/Card]`;

    let expected = "<p>[Card]This is a card[/Card]</p>"

    expect(m2h.parse(md).html).toBe(expected);
});
