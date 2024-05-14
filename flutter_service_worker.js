'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6fdf13a2b19075c71ed3d004de460f78",
"assets/AssetManifest.bin.json": "b0ba0111044dab530bb694c1432aa590",
"assets/AssetManifest.json": "2b3d3597d5d657d546bf60922a15f524",
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
"assets/fonts/MaterialIcons-Regular.otf": "175b60a4643c874cad5a566400fdf453",
"assets/NOTICES": "75cc7e0063c58aecb736865385c996ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "df4666e0b72cb7f1fac2450f3d2dc3a3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ac4defd7a1ae827fca23bf7d80f5306",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "833c316b2da8c7a0ff137c371afd4fb5",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "d48cef1ed91748513e038fefc40905b0",
"icons/Icon-512.png": "3e132648b4aecf27262481afd1ab5486",
"icons/Icon-maskable-192.png": "d48cef1ed91748513e038fefc40905b0",
"icons/Icon-maskable-512.png": "3e132648b4aecf27262481afd1ab5486",
"index.html": "a5d11d5c765639c6cee5e0d5d124c061",
"/": "a5d11d5c765639c6cee5e0d5d124c061",
"main.dart.js": "7ee61edf8ffa8e75877dab5648dc0957",
"manifest.json": "f3c0ba69ab982aa2e08da9e4f2f30488",
"version.json": "d92b2bd87a51f039ad6648fe362fdda3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
