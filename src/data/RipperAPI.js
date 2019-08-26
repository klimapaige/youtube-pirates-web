const BaseUrl = "http://localhost:8080";
const RipperUrl = BaseUrl + "/ripper";

export const fetchDownload = ({ url }) => {
  const fileName = "thing.txt";
  return fetch(RipperUrl, {
    method: "POST",
    body: JSON.stringify({ url })
  })
    .then(res => {
      console.log(res.status);
      return res;
    })
    .then(res => res.blob())
    .then(blob => {
      let link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName || "video.mp4";
      link.click();
      URL.revokeObjectURL(link.href);
    });
};
