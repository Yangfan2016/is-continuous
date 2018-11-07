## is-continuous 
![NPM version](https://img.shields.io/npm/v/is-continuous.svg?style=flat)
[![Build Status](https://travis-ci.org/Yangfan2016/is-continuous.svg?branch=master)](https://travis-ci.org/Yangfan2016/is-continuous)
[![Coverage Status](https://coveralls.io/repos/github/Yangfan2016/is-continuous/badge.svg?branch=master)](https://coveralls.io/github/Yangfan2016/is-continuous?branch=master)

> It is a tool that can run on browsers and Nodejs to detect whether strings contain continuous characters


### Installation
```bash
$ npm install is-continuous
```

### Example

commonjs
```js
var isContinuous = require('is-continuous');
```
esm
```js
import isContinuous from 'is-continuous';
```
browser
```html
<script src="./dist/isContinuous.min.js"></script>
```

### Apply

Check the strength of the password

![signup](https://raw.githubusercontent.com/Yangfan2016/PicBed/master/Blog/signup.png)

### API

| params | memo | type | default |
| :----: | :--: | :--: | :-----: |
| str | The string to be tested | string | -- |
| step | The length of continuous substring | number | 6 |


### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT license
Copyright (c) 2018 yangfan2016 &lt;15234408101@163.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
built upon love by [docor](https://github.com/turingou/docor.git) v0.3.0
