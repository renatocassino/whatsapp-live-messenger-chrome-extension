chrome.webRequest.onBeforeRequest.addListener(
  function(frame) {
    console.log(frame.url);
    // https://www.ebc.com.br/sites/_portalebc2014/files/styles/full_colunm/public/atoms_image/msnlogo.jpg?itok=moqoobCI

    return {
      cancel: false,
    };
  },
  {
    urls: [
      "*://web.whatsapp.com/*",
    ],
    types: [
      "csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "websocket", "xmlhttprequest",
    ], // csp_report, font, image, main_frame, media, object, other, ping, script, stylesheet, sub_frame, websocket, xmlhttprequest
  },
  ["blocking"]
);

// https://web.whatsapp.com/notification_0a598282e94e87dea63e466d115e4a83.mp3
// https://web.whatsapp.com/notification_0a598282e94e87dea63e466d115e4a83.mp3
