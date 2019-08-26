const BaseUrl = "http://35.184.11.66:80";
const RipperUrl = BaseUrl + "/ripper";

export const fetchDownload = ({ url }) => {
  console.log("fetching", url);
  return fetch(RipperUrl, {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => {
      console.log(res.status);
      if (res.status === 500) return Promise.reject("Server Side Failed");
      console.log(res.type);
      return res;
    })
    .then(res => res.blob())
    .then(blob => {
      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch(err => console.error(err));
};
