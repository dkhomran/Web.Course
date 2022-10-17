let btn_Show_Code = document.querySelector("#btn-sh-code-ex1");
let content_code1 = document.querySelector("#content_code1");

console.log(content_code1.innerHTML);
let show = "text";
btn_Show_Code.onclick = (eo) => {
  if (show == "text") {
    show = "code";
    content_code1.innerText = content_code1.innerHTML;
  } else {
    show = "text";
    content_code1.innerHTML = content_code1.innerText;
  }
};
