var button = document.createElement("span");

button.innerText = "View Full Site";

button.className = "button";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://flixhive.site/download-your-ebook-for-free/", "_blank");
});
document.getElementById("view-full").appendChild(button);
