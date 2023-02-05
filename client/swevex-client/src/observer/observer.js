const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("obsShow");
    } else {
      entry.target.classList.remove("obsShow");
    }
  });
});

const hiddenElements = document.querySelectorAll(".obsHidden");
hiddenElements.forEach((el) => observer.observe(el));
