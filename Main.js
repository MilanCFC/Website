let words = (function () {
  let words = [
      "Hello Everyone!",
      "Good Morning",
      "Good Afternoon",
      "Good Evening",
    ],
    el = document.querySelector(".verb"),
    currentIndex,
    currentWord,
    prevWord,
    duration = 3000;

  let _getIndex = function (max, min) {
    currentIndex = Math.floor(Math.random() * (max - min + 1)) + min;

    //Generates a random number between beginning and end of words array
    return currentIndex;
  };

  let _getWord = function (index) {
    currentWord = words[index];

    return currentWord;
  };

  let _clear = function () {
    setTimeout(function () {
      el.className = "verb";
    }, duration / 4);
  };

  let _toggleWord = function (duration) {
    setInterval(function () {
      //Stores value of previous word
      prevWord = currentWord;

      //Generate new current word
      currentWord = words[_getIndex(words.length - 1, 0)];

      //Generate new word if prev matches current
      if (prevWord === currentWord) {
        currentWord = words[_getIndex(words.length - 1, 0)];
      }

      //Swap new value
      el.innerHTML = currentWord;

      //Clear class styles
      _clear();

      //Fade in word
      el.classList.add("js-block", "js-fade-in-verb");
    }, duration);
  };

  let _init = function () {
    _toggleWord(duration);
  };

  //Public API
  return {
    init: function () {
      _init();
    },
  };
})();

words.init();
