# how to use it
There is different methods you can use in your own scripts.

```typescript
const requestFromApi = new RequestFromApi();
const getResponse = requestFromApi.GetRequestWithToken(token, "/");
const postResponse = requestFromApi.PostRequestWithToken(token, "/post", {param1, param2, ...});
```
