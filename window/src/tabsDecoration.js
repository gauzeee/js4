export function tabsDecoration() {
  let tab = document.querySelectorAll(".decoration-header-tab"),
    info = document.querySelector(".decoration-header"),
    links = document.querySelectorAll(".decoration-link"),
    linksIn = document.querySelectorAll(".decoration-link-in"),
    tabContent = document.querySelectorAll(".decoration-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      links[i].classList.remove("after_click");
      links[i].classList.add("no_click");
      linksIn[i].classList.remove("clicked");
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    links[b].classList.remove("no_click");
    links[b].classList.add("after_click");
    linksIn[b].classList.add("clicked");
    tabContent[b].classList.add("show");
    tabContent[b].classList.add("fade");
    tabContent[b].classList.remove("hide");
  }

  tab.forEach((link, index) => {
    link.addEventListener("click", event => {
      console.log(event.target);
      for (let i = 0; i < tab.length; i++) {
        if (event.target == links[i] || event.target == linksIn[i]) {
          hideTabContent(0);
          showTabContent(index);
          break;
        }
      }
    });
  });
}
