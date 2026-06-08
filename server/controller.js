
const requestController = async (req, res) => {
   const { url, body, headers, method } = req.body;
   const response = await fetch(url, {
      method, headers, body
   });
   const data = await response.text();
   res.status(200).json({
      status: response.status,
      headers: Object.fromEntries(response.headers),
      body: data
   });
}

export { requestController };