# YAHL [Yet Another Helper Library]

> `yahl` is a micro library that gives you simple utility functions for your day-to-day typescript / javascript data manipulation, sanity checks, you know the usual.

## 📦 Install

```
npm install --save yahl

```

## 🔨 Usage

```js
import * as y from 'yahl';


const filteredResult = y.filterNotNull([1, null, 2, 3]);

console.log(filteredResult); // [1, 2, 3];
```