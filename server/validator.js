
class requestValidatorClass {
   constructor({ url, body, headers, method }) {
      if (!url) {
         throw {
            msg: "url argument must be send",
            status: 400
         }
      }
      // এগুলি বেশি গুরুত্বপূর্ণ নয় কারণ user blank পাঠালে blank ই যাবে 
      this.url = url;
      this.method = method ? method.toUpperCase() : "GET";
      this.body = body;
      this.headers = headers;
   }
}

export { requestValidatorClass }