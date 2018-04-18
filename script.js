import style from "./style.less";
import regeneratorRuntime from "regenerator-runtime";

function createSpanWithText(parent, text) {
  let newSpan = document.createElement("span");
  newSpan.innerHTML = text;
  parent.appendChild(newSpan);
  return text + 1;
}

Promise.resolve()
  .then(() => createSpanWithText(testPromise, 1))
  .then(res => createSpanWithText(testPromise, res))
  .then(res => createSpanWithText(testPromise, res))
  .then(res => createSpanWithText(testPromise, res))
  .then(res => createSpanWithText(testPromise, res));

(async () => {
  let x = await createSpanWithText(testAsync, 1);
  x = await createSpanWithText(testAsync, x);
  x = await createSpanWithText(testAsync, x);
  x = await createSpanWithText(testAsync, x);
  x = await createSpanWithText(testAsync, x);
})();
