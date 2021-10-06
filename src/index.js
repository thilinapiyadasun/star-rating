let stars = document.getElementsByClassName("star-rating");
let fixed = false;
Array.from(stars).forEach((item) =>
  item.addEventListener("click", handleClick)
);

Array.from(stars).forEach((item) =>
  item.addEventListener("mouseenter", higlightOnEnter)
);
Array.from(stars).forEach((item) =>
  item.addEventListener("mouseleave", resetOnLeave)
);

function handleClick(event) {
  let el = event.target;
  const currentStar = el.id;
  if (currentStar > 0) {
    fixed = true;
  }
  for (let i = 0; i < currentStar; i++) {
    stars[i].classList.add("gold");
  }
}

function higlightOnEnter(event) {
  let el = event.target;

  const currentStar = el.id;
  for (let i = 0; i < currentStar; i++) {
    stars[i].classList.add("gold");
  }
}

function resetOnLeave(event) {
  if (!fixed) {
    let el = event.target;
    el.classList.remove("gold");
    // console.log(el.id);
    const currentStar = el.id;
    for (let i = currentStar; i < 5; i++) {
      stars[i].classList.remove("gold");
    }
  }
}
