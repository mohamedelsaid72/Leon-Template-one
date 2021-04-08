const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "../assets/js/app.js",
    "../index.html",
    "../assets/css/style.css",
    "../assets/css/normalized.css",
    "../assets/css/all.min.css",
    "../assets/images/about.jpg",
    "../assets/images/black_and_1534817744-1024x475.jpeg",
    "../assets/images/logo.png",
    "../assets/images/portfolio-1.png",
    "../assets/images/portfolio-2.jfif",
    "../assets/images/portfolio-3.jfif",
    "../assets/images/services.jfif"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})