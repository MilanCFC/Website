const words = [
  "Hello Everyone!",
  "Good Morning",
  "Good Afternoon",
  "Good Evening",
];

class Greeting {
  constructor(words, duration) {
    this.words = words;
    this.el = document.querySelector(".verb");
    this.currentIndex;
    this.currentWord;
    this.prevWord;
    this.duration = duration;
  }

  init = function () {
    this._toggleWord(this.duration);
  };

  _toggleWord = function (duration) {
    setInterval(() => {
      this.prevWord = this.currentWord;

      this.currentWord = this.words[this._getIndex(this.words.length - 1, 0)];

      if (this.prevWord === this.currentWord) {
        this.currentWord = this.words[this._getIndex(this.words.length - 1, 0)];
      }

      this.el.innerHTML = this.currentWord;

      this._clear(duration);

      this.el.classList.add("js-block", "js-fade-in-verb");
    }, duration);
  };

  _getIndex = function (max, min) {
    this.currentIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    return this.currentIndex;
  };

  _clear = function (duration) {
    setTimeout(() => {
      this.el.className = "verb";
    }, duration / 4);
  };
}

const changeRoute = (route, sectionNames, link, links) => {
  const passiveSections = sectionNames.filter((name) => name !== route);

  passiveSections.forEach((sectionName) => {
    const section = document.querySelector(`.${sectionName}`);
    section.style.display = "none";
  });

  const activeSection = document.querySelector(`.${route}`);
  activeSection.style.display = "block";

  link.classList.add("current");

  links
    .filter((_link) => _link !== link)
    .forEach((link) => {
      link.classList.remove("current");
    });
};

const addRouting = () => {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const projectsLink = document.getElementById("projects-link");
  const contactLink = document.getElementById("contact-link");

  const links = [homeLink, aboutLink, projectsLink, contactLink];

  const sectionNames = links.reduce(
    (acc, cur) => acc.concat(cur.getAttribute("data-controls")),
    []
  );

  changeRoute("home", sectionNames, homeLink, links);

  links.forEach((link) => {
    link.addEventListener("click", () =>
      changeRoute(link.getAttribute("data-controls"), sectionNames, link, links)
    );
  });
};

const init = () => {
  new Greeting(words, 3000).init();
  addRouting();
};

document.addEventListener("DOMContentLoaded", init);
