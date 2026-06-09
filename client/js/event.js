
request_form.onsubmit = async e => {
   e.preventDefault();

   const url = url_input.value;
   const method = method_select.value;
   let headers = request_headers.value.replace(/\s+/g, ' ').trim();
   let body = request_body.value.replace(/\s+/g, ' ').trim();

   try {
      headers = JSON.parse(headers);
   } catch (err) {
      return alert("Headers is not valid");
   }

   try {
      const response = await fetch("/", {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify({
            url, method, headers, body
         })
      });
      const data = await response.json();

      responseBinding({
         status: data.status,
         responseHeaders: JSON.stringify(data.headers, null, 4),
         response: data.headers["content-type"].includes("application/json") ? JSON.stringify(data.body, null, 4) : data.body
      });
   } catch (err) {
      console.log(err);
   }
}

method_select.onchange = e => {
   const method = e.target.value;
   if (method === "GET") {
      request_body.setAttribute("disabled", "true");
      request_body.value = "";
   } else {
      request_body.removeAttribute("disabled");
   }
}
request_body.setAttribute("disabled", "true");