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

    expect(m2h.parse("text", scss).html).toBe("<p style=\"color: red;\">text</p>");
});

test("should return correct highlight text with no css", async () => {

    expect(m2h.parse("==text==").html).toBe("<p><mark>text</mark></p>");
});

test("should return correct higlight text with css", async () => {

    let scss = `
        $color: red;
        mark {
            color: $color;
        }
    `;

    expect(m2h.parse("==text==", scss).html).toBe("<p><mark style=\"color: red;\">text</mark></p>");
});

test("should return correct code", async () => {

    let md = `
\`\`\`js
const v = 10;
\`\`\`
    `;

    let expected = `<pre><code class="js language-js">const v = 10;
</code></pre>`;

    expect(m2h.parse(md).html).toBe(expected);
});

