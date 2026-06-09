
const requestController = async (req, res) => {
   const { url, body, headers, method } = req.body;
   let response;
   if (method.toUpperCase() === "GET") {
      response = await fetch(url, {
         method, headers
      });
   } else {
      response = await fetch(url, {
         method, headers, body
      });
   }
   let data = await response.text();
   try {
      data = JSON.parse(data)
   } catch (err) { }
   res.status(200).json({
      status: response.status,
      headers: Object.fromEntries(response.headers),
      body: data
   });
}

export { requestController };