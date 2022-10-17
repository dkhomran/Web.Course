let btn_Show_Code2 = document.querySelector("#btn-sh-code-ex2");
let content_code2 = document.querySelector("#content_code2");

console.log(content_code2.innerHTML);
let show = "text";
btn_Show_Code2.onclick = (eo) => {
  if (show == "text") {
    show = "code";
    content_code2.innerText = content_code2.innerHTML;
  } else {
    show = "text";
    content_code2.innerHTML = content_code2.innerText;
  }
};
