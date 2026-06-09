const responseBinding = ({ status, responseHeaders, response }) => {
   status_badge.innerText = `Status: ${status}`;
   response_headers_output.value = responseHeaders;
   response_output.value = response;
}