const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let string = "";
  for (let i = 0; i < expr.length; i += 10) {
    if (typeof String.prototype.replaceAll === "undefined") {
      String.prototype.replaceAll = function (subStr, repElem) {
        return this.replace(new RegExp(subStr, "g"), () => repElem);
      };
    }
    let newString = expr.slice(i, i + 10).replaceAll("00", "")
    .replaceAll("11", "-").replaceAll("10", ".").replace("**********", " ");
    string += `${newString} `;
  }
  return string.split("  ").map((element) =>
      element.split(" ").map((char) => MORSE_TABLE[char]).join("")
    ).join(" ").trim();
}

module.exports = {
  decode,
};