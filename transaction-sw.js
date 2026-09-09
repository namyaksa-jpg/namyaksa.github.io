// 최소 서비스 워커: 앱 설치(홈 화면 추가) 조건을 충족시키기 위한 용도입니다.
// 별도의 오프라인 캐싱 없이, 그냥 네트워크 요청을 그대로 통과시킵니다.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
