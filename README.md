# m2h

A Markdown to HTML converter with inline CSS generated from SASS

[![GitHub Release](https://img.shields.io/github/release/thiagodnf/m2h.svg)](https://github.com/thiagodnf/m2h/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/thiagodnf/m2h.svg)](https://github.com/thiagodnf/m2h/graphs/contributors)
[![GitHub stars](https://img.shields.io/github/stars/thiagodnf/m2h.svg)](https://github.com/thiagodnf/m2h)
[![npm (scoped)](https://img.shields.io/npm/v/@thiagodnf/m2h)](https://www.npmjs.com/package/@thiagodnf/m2h)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Installation

NPM

```bash
npm install @thiagodnf/m2h
```


## Quick Example

###  For Node.js

```js
var m2h  = require("@thiagodnf/m2h/src/M2H.js");

const mdFileContent = `
---
Author: Thiago Ferreira
---
# Heading 1

This is paragraph

## Heading 2

This is another paragraph
`;

const cssFileContent = `
$color: red;

p {
    color: $color;
}
`;

const isSass = true;

const parsed = m2h.parse(mdFileContent, cssFileContent, isSass);

console.log(parsed.html);

```
The output will be:

```html
<h1 id="heading-1">Heading 1</h1>
<p style="color: red;">This is paragraph</p>
<h2 id="heading-2">Heading 2</h2>
<p style="color: red;">This is another paragraph</p>
```

### Terminal

```shell
node index.js example.md --css style.scss -o all
```

The output will be:

```json
{
  "html": "<h1 id=\"heading-1\">Heading 1</h1><p style=\"color: red;\">This is paragraph</p><h2 id=\"heading-2\">Heading 2</h2><p style=\"color: red;\">This is another paragraph</p>",
  "metadata": { "Author": "Thiago Ferreira" }
}
```

## Options

You can change some of the default behavior through options.

### `src`

**Required** the markdown-based input file.

### `--css` or `-c`

**Optional** The style (.css or .scss) files

### `--output` or `-o`

**Optional** The format of the output. Valid options: `html`, `metadata`, or `all`.



## For Developers

Clone the project and then install all dependencies:

```bash
npm install
```

To run the unit tests, please type:

```bash
npm test
```

## Questions or Suggestions

Feel free to access the <a href="../../discussions">discussions tab</a> as you need

## Contribute

Contributions to this project are very welcome! We can't do this alone! Feel free to fork this project, work on it and then make a pull request.

## License

Licensed under the [MIT license](LICENSE).

## Donate

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, reach out to me if you want to do it.
