import M2H from "../../src/M2H.js";

let m2h = null;

beforeEach(() => {
    m2h = new M2H();
});


test("should return correct code formatting for javascript", async () => {

    let md = "```js\nconst v = 10;\n```";

    let expected = "<pre><code class=\"js language-js\"><span class=\"hljs-keyword\">const</span> v = <span class=\"hljs-number\">10</span>;\n</code></pre>";

    expect(m2h.parse(md).html).toBe(expected);
});

test("should return correct code formatting with css", async () => {

    let css = `
        .hljs-keyword {
            color: blue;
        }
    `;

    let md = "```js\nconst v = 10;\n```";

    let expected = "<pre><code class=\"js language-js\"><span class=\"hljs-keyword\" style=\"color: blue;\">const</span> v = <span class=\"hljs-number\">10</span>;\n</code></pre>";

    expect(m2h.parse(md, css).html).toBe(expected);
});
