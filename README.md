## Live
[Live demo on vercel]()

Stack: [React.js](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Mobx](https://mobx.js.org/README.html), [Tailwind css](https://tailwindcss.com/)

### Features
- Module architect system
- Own mini-table component
- Get data from poloniex.com every 5 seconds, except when modal was opened
- Custom modal



## Local

First, run the proxy API:

```bash
cd api
node index.js
```

Second, Change the port if needed. Default is `4000` for api and `3000` for front


Third, run front with ```react-scripts start```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.