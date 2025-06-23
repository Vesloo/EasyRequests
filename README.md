# how to use it
There is different methods you can use in your own scripts.

```typescript
const requestFromApi = new RequestFromApi();
const getResponse = requestFromApi.GetRequestWithToken(token, "http://localhost:3000/");
const postResponse = requestFromApi.PostRequestWithToken(token, "http://localhost:3000/", {param1, param2, ...});
```
