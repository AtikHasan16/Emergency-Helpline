function getElementId(id) {
  const elementId = document.getElementById(id).innerText;
  return elementId;
}
function getElementClass(cls) {
  const elementClass = document.getElementsByClassName(cls);
  return elementClass;
}
// For Heart count
function setHeartId(value) {
  const setElementId = (document.getElementById("heart-count").innerText =
    value);
  return setElementId;
}
// For Coin Count
function setCoinId(value) {
  const setCoinId = (document.getElementById("coin-count").innerText = value);
  return setCoinId;
}
// For Copy Count
function setCopyId(value) {
  const copyCount = (document.getElementById("copy-count").innerText = value);
  return copyCount;
}
// For count heart
let heartCount = Number(getElementId("heart-count"));
const heartButton = getElementClass("heart-button");
for (const button of heartButton) {
  button.addEventListener("click", function () {
    setHeartId((heartCount = heartCount + 1));
  });
}
// Event for Call button
let coinCount = Number(getElementId("coin-count"));
const callButtons = getElementClass("call-button");
for (const button of callButtons) {
  const callTime = new Date().toLocaleTimeString();
  const CardTitle = button.parentElement.parentElement.children[0].innerText;
  const emergencyNumber =
    button.parentElement.parentElement.children[2].innerText;
  button.addEventListener("click", function () {
    if (coinCount > 0) {
      alert("📞 Calling " + CardTitle + " : " + emergencyNumber);
      setCoinId(Number((coinCount = coinCount - 20)));

      //   add to history card
      const historyContainer = document.getElementById("history-container");
      const historyDiv = document.createElement("div");
      historyDiv.innerHTML = `
      <div
            class="rounded-lg text-lg text-gray-700 p-2 px-3 bg-gray-100 mb-6 flex items-center justify-between"
          >
            <div>
              <h1 class="">${CardTitle}</h1>
              <h1>${emergencyNumber}</h1>
            </div>

            <p>${callTime}</p>
          </div>
      `;
      historyContainer.appendChild(historyDiv);
      return;
    } else {
      alert(
        "❌ You do not have sufficient coin. You need at least 20 coins to make a call"
      );
      return;
    }
  });
}

// cleat history button

document.getElementById("history-clear").addEventListener("click", function () {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = " ";
});

// *********** Challenge Part ****************
// Event for Copy button
let copyCount = Number(getElementId("copy-count"));

const copyButtons = getElementClass("copy-button");
for (const button of copyButtons) {
  const emergencyNumber =
    button.parentElement.parentElement.children[2].innerText;
  button.addEventListener("click", function () {
    alert("✅ Number is copied: " + emergencyNumber);
    navigator.clipboard.writeText(emergencyNumber);
    setCopyId((copyCount = copyCount + 1));
  });
}
