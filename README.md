# babel-issue

**Steps to reproduce:**

1. Run `git clone https://github.com/Enase/babel-issue.git`
2. Run `npm i` in project root
3. Run `npm run start` in project root
4. Open `http://localhost:3000` in browser

**Expected result:**

`Hello` message in a browser.

**Actual result result:**

Error in a browser:
```
Uncaught TypeError: Cannot read property 'register' of undefined
    at new APIClass (API.js?0f51:80)
    at eval (API.js?0f51:205)
    at Object../node_modules/@aws-amplify/api/lib/API.js (vendors~main.chunk.js:2003)
    at __webpack_require__ (main.js:849)
    at fn (main.js:151)
    at eval (index.js?636d:15)
    at Object../node_modules/@aws-amplify/api/lib/index.js (vendors~main.chunk.js:2015)
    at __webpack_require__ (main.js:849)
    at fn (main.js:151)
    at eval (index.js?b994:42)
```
