import hello_word from "./hello.js";
import world_word from "./world.js";

import "./style.scss";
import "./style.css";
import addImage from "./addImage";

addImage();
console.log(document.querySelector("#root"));
document.querySelector("#root").innerHTML = `${hello_word} ${world_word} 123`;
document.querySelector("#root").classList.add("hello");
console.log("css", css);
