let btn_Show_Code3 = document.querySelector("#btn-sh-code-tp2");
let content_code3 = document.querySelector("#content_code3");

console.log(btn_Show_Code3);
let show = "text";
btn_Show_Code3.onclick = (eo) => {
  if (show == "text") {
    show = "code";
    content_code3.innerText = content_code3.innerHTML;
  } else {
    show = "text";
    content_code3.innerHTML = content_code3.innerText;
  }
};
