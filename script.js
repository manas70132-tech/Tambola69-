if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function () {
        console.log("Service Worker registered successfully.");
      })
      .catch(function (error) {
        console.log("Service Worker registration failed:", error);
      });
  });
}￼Enter
