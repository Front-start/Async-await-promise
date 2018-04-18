import style from "./style.less";
import regeneratorRuntime from "regenerator-runtime";

function createSpanWithText(parent, text) {
  return new Promise(resolve => {
    let newSpan = document.createElement("span");
    newSpan.innerHTML = text;
    parent.appendChild(newSpan);
    return resolve(text + 1);
  });
}

Promise.resolve()
  .then(() => createSpanWithText2(testPromise, 1))
  .then(res => createSpanWithText2(testPromise, res))
  .then(res => createSpanWithText2(testPromise, res))
  .then(res => createSpanWithText2(testPromise, res))
  .then(res => createSpanWithText2(testPromise, res));

function xxx() {
  (async () => {
    let x = await createSpanWithText2(testAsync, 1);
    x = await createSpanWithText2(testAsync, x);
    x = await createSpanWithText2(testAsync, x);
    x = await createSpanWithText2(testAsync, x);
    await sleep(1111);
    x = await createSpanWithText2(testAsync, x);
  })();
}

xxx();

Promise.all([
  createSpanWithText(testPromise2, 1),
  createSpanWithText(testPromise2, 2),
  createSpanWithText(testPromise2, 3),
  createSpanWithText(testPromise2, 4),
  createSpanWithText(testPromise2, 5)
]).then(() => createSpanWithText(testPromise2, 7));
