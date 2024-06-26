'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7c3cc3b31e58d9ed58f0a645af5d9248",
"assets/AssetManifest.bin.json": "87280744fbffb650c9b0b6eb2ee99783",
"assets/AssetManifest.json": "a8ad1f2599d497f6e6b891691bf5a071",
"assets/assets/banner.png": "829701791f210fd87c48dae61cf51377",
"assets/assets/empty.jpg": "3156efdb345eadfa73224a6a32531124",
"assets/assets/especialidad/biologia.png": "b4f794e13e6388a082d8d3a405c4ea5f",
"assets/assets/especialidad/enfermeria.png": "f9a847668a936eb0d5c2cfdcffce4253",
"assets/assets/especialidad/labclinico.png": "c77cd580b4ac07674f864eb8d6104bd0",
"assets/assets/especialidad/medicina.png": "cf9709f01efc94e8bd8b59410bbbf95c",
"assets/assets/especialidad/medicinaespecialidad.png": "2ea18e84b0b4a84727422258b00a2dfa",
"assets/assets/especialidad/nutricion.png": "0a6ecd5108034bcfaa733771e34f3ef5",
"assets/assets/especialidad/obstetricia.png": "91a8d85779577e3ec86c30b1af7d892e",
"assets/assets/especialidad/odontologia.png": "731fb17e94d5b39a41e051975b63a5f6",
"assets/assets/especialidad/optometria.png": "43b1e9ad1013af2cef7c234f318bfc7b",
"assets/assets/especialidad/psico.png": "4ee0ebe63d0f43efb9a937c53f492bb9",
"assets/assets/especialidad/quimico.png": "3df978bfca3b8b7057a69ea5b1248a88",
"assets/assets/especialidad/radiologia.png": "84bbd07af32aed4d205279c7502a3352",
"assets/assets/especialidad/sanitaria.png": "6547184f92f49c848f5cf510978d6dc2",
"assets/assets/especialidad/terapia.png": "10a64af2fbc5ec4b7899ebc524df8b7f",
"assets/assets/especialidad/terapialenguaje.png": "6a7addd9e3da9abbe143fd438bf00744",
"assets/assets/especialidad/terapiaocupacional.png": "7f087f3241df7ef7eb6e06ae39292f13",
"assets/assets/especialidad/trabajosocial.png": "32c7aa826d92c77be94684ce3a7840ee",
"assets/assets/especialidad/veterinaria.png": "ca5952362e492e4e00d1e1e3d37e59d6",
"assets/assets/fb_logo.png": "e4da23704f27c9df07e6c21a13e28bfd",
"assets/assets/icon-fav-1.png": "ec311787f48ee43530107715bb3b4998",
"assets/assets/icon-fav-2.png": "23da1a26c1d61a86566f3a6464411b44",
"assets/assets/icon-fav-3.png": "948285d78f92cfd8f21ca9b600ce3b4e",
"assets/assets/json/categories.json": "a32bbeb60a113cdbcb3e85d3d1b741b2",
"assets/assets/json/institutions.json": "163f9ddb1b1b8549db657266e920b254",
"assets/assets/json/professions.json": "3ac4363bf687eb6ec4e7eba433933781",
"assets/assets/logo.svg": "e8a7244f5d9c3f4e8ff0eea5ee653b26",
"assets/assets/noreviews.png": "bfa5e31533463caeebc7d207dfc57c26",
"assets/assets/plist.png": "d62c75cba5e1a87f3eef2c24dc326559",
"assets/assets/texts/privacy_policy.txt": "d31621c4b894c21f8f3a246f57b5acde",
"assets/assets/texts/term_service.txt": "68ead0c6c86c8df0563f8d7b8b1e23fb",
"assets/assets/tiktok.png": "7136cec4b31b4ab8fa218bdb9835b791",
"assets/assets/welcome.png": "57d3415becc7d768fe7ed84738825651",
"assets/FontManifest.json": "6724583af297aab6c218fdbdfcf6b16c",
"assets/fonts/DMSans-Bold.ttf": "9def97569c21a2e08c818845776c4f21",
"assets/fonts/DMSans-Medium.ttf": "2dd767322ccc760c0c31d6a900b9d3b2",
"assets/fonts/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/fonts/DMSans-SemiBold.ttf": "b475f362cd4f51d0bb56cb036c86ef73",
"assets/fonts/MaterialIcons-Regular.otf": "6c446245db4e08fb5a8d28f54353b52c",
"assets/NOTICES": "e680c2b0ed838ea3b53f880bbb72e706",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "df4666e0b72cb7f1fac2450f3d2dc3a3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "7d4edbddc9925ccc980d628ca0fc201f",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "833c316b2da8c7a0ff137c371afd4fb5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7ffde8480f3348e84862a2e31d5d27fc",
"icons/Icon-192.png": "d48cef1ed91748513e038fefc40905b0",
"icons/Icon-512.png": "3e132648b4aecf27262481afd1ab5486",
"icons/Icon-maskable-192.png": "d48cef1ed91748513e038fefc40905b0",
"icons/Icon-maskable-512.png": "3e132648b4aecf27262481afd1ab5486",
"index.html": "2d722a8ed82eee0c7b2266569c8a1780",
"/": "2d722a8ed82eee0c7b2266569c8a1780",
"main.dart.js": "3c2181499010987da2376988fba0caba",
"manifest.json": "f3c0ba69ab982aa2e08da9e4f2f30488",
"version.json": "ad60abfcc369036601c121e3f1a681fd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
