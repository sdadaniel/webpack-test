import testImage from "../public/test.png";

function addImage() {
  const img = document.createElement("img");
  img.alt = "test image";
  img.width = 300;
  img.src = testImage;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
