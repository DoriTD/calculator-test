"use strict";

let stored = null;
let touchStart;
/* As part of improving the code I replaced id's with classes and created this
 function in order to make it simpler to target elements */
const q = (selector) => document.querySelector(selector);

const digits = [...Array(10).keys()].map((key) => key.toString());

const operations = {
  "+": (first, second) => first + second,
  "-": (first, second) => first - second,
  "*": (first, second) => first * second,
  "/": (first, second) => first / second,
};

const elements = {
  get display() {
    return q(".display");
  },
  digitButtons: (() => {
    const buttons = {};
    for (let digit of digits)
      Object.defineProperty(buttons, digit, {
        enumerable: true,
        get: () => q(`.btn-${digit}`),
      });
    return buttons;
  })(),
  get separatorButton() {
    return q(".btn-separator");
  },
  get clearButton() {
    return q(".btn-clear");
  },
  operationButtons: (() => {
    const buttons = {};
    for (let opCode of Object.keys(operations))
      Object.defineProperty(buttons, opCode, {
        enumerable: true,
        get: () =>
          q(
            {
              "+": ".btn-add",
              "-": ".btn-subtract",
              "*": ".btn-multiply",
              "/": ".btn-divide",
            }[opCode]
          ),
      });
    return buttons;
  })(),
  get calculateButton() {
    return q(".btn-calculate");
  },
};

function setUpEntryButtons() {
  for (let [digit, button] of Object.entries(elements.digitButtons))
    button.addEventListener("click", function () {
      tap(button);
      elements.display.textContent += digit;
    });

  elements.separatorButton.addEventListener("click", function () {
    tap(elements.separatorButton);
    const text = elements.display.textContent;
    if (text.length && text.indexOf(".") === -1)
      elements.display.textContent += ".";
  });

  elements.clearButton.addEventListener("click", function () {
    tap(elements.clearButton);
    elements.display.textContent = "";
    stored = null;
  });
}

function calculate() {
  const [first, second] = [stored.text, elements.display.textContent].map(
    (text) => parseFloat(text)
  );
  return operations[stored.opCode](first, second);
}

function setUpOperationButtons() {
  for (let [opCode, button] of Object.entries(elements.operationButtons))
    button.addEventListener("click", function () {
      tap(button);
      stored = {
        text: stored ? calculate() : elements.display.textContent,
        opCode,
      };
      elements.display.textContent = "";
    });
}

function setUpCalculateButton() {
  elements.calculateButton.addEventListener("click", function () {
    tap(elements.calculateButton);
    if (!stored) return;
    elements.display.textContent = calculate();
    stored = null;
  });
}

// when a user presses a key corresponding to a button we click the button
function setUpKeys() {
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === ".") {
      q(".btn-separator").click();
    }
    if (keyName === "Backspace") {
      q(".btn-clear").click();
    }
    if (keyName === "+") {
      q(".btn-add").click();
    }
    if (keyName === "-") {
      q(".btn-subtract").click();
    }
    if (keyName === "*") {
      q(".btn-multiply").click();
    }
    if (keyName === "/") {
      q(".btn-divide").click();
    }
    if (keyName === "=") {
      q(".btn-calculate").click();
    }
    if (
      digits.find((digit) => {
        return digit === keyName;
      })
    ) {
      q(`.btn-${keyName}`).click();
    }
  });
}

/* I considered that the difference from tap to swipe is that swipe has to move the 
 finger for more than 50px from the right so I checked for that difference */
function setUpSwipe() {
  elements.display.addEventListener("touchstart", function (event) {
    touchStart = event.changedTouches[0].clientX;
  });
  elements.display.addEventListener("touchend", function (event) {
    let touchEnd = event.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) elements.clearButton.click();
  });
}

/* I add the tap class and remove it right away so that the user gets some
feedback for clicking or pressing keys */
function tap(btn) {
  btn.classList.add("tap");
  setTimeout(() => {
    btn.classList.remove("tap");
  }, 200);
}

(() => {
  setUpEntryButtons();
  setUpKeys();
  setUpSwipe();
  setUpOperationButtons();
  setUpCalculateButton();
})();
