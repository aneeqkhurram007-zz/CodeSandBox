import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div id="display">
<h1 style="display:none">lorem Ipsum</h1>
<img
src="https://i.picsum.photos/id/682/100/100.jpg?hmac=CRV5lkbIRKK3IZuKRuq_PPffgN9Zz_J5YmwK3NQiN8o" alt="image" />
</div>
`;
const changeDisplay = (event) => {
  const home = document.querySelector("#display").firstElementChild;

  if (event.type === "mouseenter") {
    home.style.display = "block";
  } else {
    home.style.display = "none";
  }
};
document.querySelector("#display").onmouseenter = changeDisplay;
document.querySelector("#display").onmouseleave = changeDisplay;
