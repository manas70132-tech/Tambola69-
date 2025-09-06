self.addEventListener("install",event
=> {
event.waituntill(
caches.open("Tambola-cache").then(cache
=>{
return cache.addall([
"/
"
"/index.html",
"/admin.html",
"/style.css",
"/script.js",
"/icon-192.png",
"/icon-512.png",
]);
})
);
});

self.addEvenListener("fetch",event=>
{
event.respondWith(
caches.match(event.request).then(response =>{
return response ||
fetch(event.request);
})
);
});
