!function(){"use strict";const s=["/client/PostDescription.d36b9706.js","/client/about.cbbdee34.js","/client/index.30131a6b.js","/client/index.b94a24c5.js","/client/[tag].f0b58b3d.js","/client/client.1e6cbd57.js","/client/index.c1e4782a.js","/client/index.e78a9065.js","/client/index.41dd5e82.js","/client/index.3b431e5c.js","/client/client.66b62f9b.js","/client/SprinterSimulator.7dcdd292.js"].concat(["/service-worker-index.html","/85-rule-percentages.png","/carl-lewis-speaking.png","/example-article.png","/global.css","/icons/ICON-LICENSE","/icons/README.md","/icons/account-login.svg","/icons/account-logout.svg","/icons/action-redo.svg","/icons/action-undo.svg","/icons/align-center.svg","/icons/align-left.svg","/icons/align-right.svg","/icons/aperture.svg","/icons/arrow-bottom.svg","/icons/arrow-circle-bottom.svg","/icons/arrow-circle-left.svg","/icons/arrow-circle-right.svg","/icons/arrow-circle-top.svg","/icons/arrow-left.svg","/icons/arrow-right.svg","/icons/arrow-thick-bottom.svg","/icons/arrow-thick-left.svg","/icons/arrow-thick-right.svg","/icons/arrow-thick-top.svg","/icons/arrow-top.svg","/icons/audio-spectrum.svg","/icons/audio.svg","/icons/badge.svg","/icons/ban.svg","/icons/bar-chart.svg","/icons/basket.svg","/icons/battery-empty.svg","/icons/battery-full.svg","/icons/beaker.svg","/icons/bell.svg","/icons/bluetooth.svg","/icons/bold.svg","/icons/bolt.svg","/icons/book.svg","/icons/bookmark.svg","/icons/box.svg","/icons/briefcase.svg","/icons/british-pound.svg","/icons/browser.svg","/icons/brush.svg","/icons/bug.svg","/icons/bullhorn.svg","/icons/calculator.svg","/icons/calendar.svg","/icons/camera-slr.svg","/icons/caret-bottom.svg","/icons/caret-left.svg","/icons/caret-right.svg","/icons/caret-top.svg","/icons/cart.svg","/icons/chat.svg","/icons/check.svg","/icons/chevron-bottom.svg","/icons/chevron-left.svg","/icons/chevron-right.svg","/icons/chevron-top.svg","/icons/circle-check.svg","/icons/circle-x.svg","/icons/clipboard.svg","/icons/clock.svg","/icons/cloud-download.svg","/icons/cloud-upload.svg","/icons/cloud.svg","/icons/cloudy.svg","/icons/code.svg","/icons/cog.svg","/icons/collapse-down.svg","/icons/collapse-left.svg","/icons/collapse-right.svg","/icons/collapse-up.svg","/icons/command.svg","/icons/comment-square.svg","/icons/compass.svg","/icons/contrast.svg","/icons/copywriting.svg","/icons/credit-card.svg","/icons/crop.svg","/icons/dashboard.svg","/icons/data-transfer-download.svg","/icons/data-transfer-upload.svg","/icons/delete.svg","/icons/dial.svg","/icons/document.svg","/icons/dollar.svg","/icons/double-quote-sans-left.svg","/icons/double-quote-sans-right.svg","/icons/double-quote-serif-left.svg","/icons/double-quote-serif-right.svg","/icons/droplet.svg","/icons/eject.svg","/icons/elevator.svg","/icons/ellipses.svg","/icons/envelope-closed.svg","/icons/envelope-open.svg","/icons/euro.svg","/icons/excerpt.svg","/icons/expand-down.svg","/icons/expand-left.svg","/icons/expand-right.svg","/icons/expand-up.svg","/icons/external-link.svg","/icons/eye.svg","/icons/eyedropper.svg","/icons/file.svg","/icons/fire.svg","/icons/flag.svg","/icons/flash.svg","/icons/folder.svg","/icons/fork.svg","/icons/fullscreen-enter.svg","/icons/fullscreen-exit.svg","/icons/globe.svg","/icons/graph.svg","/icons/grid-four-up.svg","/icons/grid-three-up.svg","/icons/grid-two-up.svg","/icons/hard-drive.svg","/icons/header.svg","/icons/headphones.svg","/icons/heart.svg","/icons/home.svg","/icons/image.svg","/icons/inbox.svg","/icons/infinity.svg","/icons/info.svg","/icons/italic.svg","/icons/justify-center.svg","/icons/justify-left.svg","/icons/justify-right.svg","/icons/key.svg","/icons/laptop.svg","/icons/layers.svg","/icons/lightbulb.svg","/icons/link-broken.svg","/icons/link-intact.svg","/icons/list-rich.svg","/icons/list.svg","/icons/location.svg","/icons/lock-locked.svg","/icons/lock-unlocked.svg","/icons/loop-circular.svg","/icons/loop-square.svg","/icons/loop.svg","/icons/magnifying-glass.svg","/icons/map-marker.svg","/icons/map.svg","/icons/media-pause.svg","/icons/media-play.svg","/icons/media-record.svg","/icons/media-skip-backward.svg","/icons/media-skip-forward.svg","/icons/media-step-backward.svg","/icons/media-step-forward.svg","/icons/media-stop.svg","/icons/medical-cross.svg","/icons/menu.svg","/icons/microphone.svg","/icons/minus.svg","/icons/monitor.svg","/icons/moon.svg","/icons/move.svg","/icons/musical-note.svg","/icons/paperclip.svg","/icons/pencil.svg","/icons/people.svg","/icons/person.svg","/icons/phone.svg","/icons/pie-chart.svg","/icons/pin.svg","/icons/play-circle.svg","/icons/plus.svg","/icons/power-standby.svg","/icons/print.svg","/icons/project.svg","/icons/pulse.svg","/icons/puzzle-piece.svg","/icons/question-mark.svg","/icons/rain.svg","/icons/random.svg","/icons/reload.svg","/icons/resize-both.svg","/icons/resize-height.svg","/icons/resize-width.svg","/icons/rss-alt.svg","/icons/rss.svg","/icons/script.svg","/icons/share-boxed.svg","/icons/share.svg","/icons/shield.svg","/icons/signal.svg","/icons/signpost.svg","/icons/sort-ascending.svg","/icons/sort-descending.svg","/icons/spreadsheet.svg","/icons/star.svg","/icons/sun.svg","/icons/tablet.svg","/icons/tag.svg","/icons/tags.svg","/icons/target.svg","/icons/task.svg","/icons/terminal.svg","/icons/text.svg","/icons/thumb-down.svg","/icons/thumb-up.svg","/icons/timer.svg","/icons/transfer.svg","/icons/trash.svg","/icons/underline.svg","/icons/vertical-align-bottom.svg","/icons/vertical-align-center.svg","/icons/vertical-align-top.svg","/icons/video.svg","/icons/volume-high.svg","/icons/volume-low.svg","/icons/volume-off.svg","/icons/warning.svg","/icons/wifi.svg","/icons/wrench.svg","/icons/x.svg","/icons/yen.svg","/icons/zoom-in.svg","/icons/zoom-out.svg","/link-graph.png","/manifest.json","/prism-theme.css","/sprinter-100m-plot.png","/the-nugget-carl-lewis.png"]),o=new Set(s);self.addEventListener("install",o=>{o.waitUntil(caches.open("cache1641404033552").then(o=>o.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const o of s)"cache1641404033552"!==o&&await caches.delete(o);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const i=new URL(s.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&o.has(i.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1641404033552").then(async o=>{try{const i=await fetch(s.request);return o.put(s.request,i.clone()),i}catch(i){const c=await o.match(s.request);if(c)return c;throw i}}))))})}();
