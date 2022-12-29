# Dreamify API

Dreamify API is a free **but limited** wrapper around [OpenAI API](https://beta.openai.com/docs/introduction) that you can use to generate text to image made from AI without running any server-side code. It's awesome for teaching purposes, sample codes, tests and etc.

## Why?

I wanted to design a portfolio project prototype that showed my knowledge as a Full-Stack developer, so I decided to create this simple web service with NodeJs (express).

## How to

you can fetch data with any kind of methods you know (fetch API, Axios, jquery, ajax,...)

### Create image

```js
const response = await fetch("https://dreamify-api.netlify.app/.netlify/functions/api/v1/create", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt: data.get("prompt") }),
});
```
