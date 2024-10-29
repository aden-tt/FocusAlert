function openTab(){

    var newTab = browser.tabs.create({
        url:'https://github.com/aden-tt',
        active:true
    })
};

browser.browserAction.onClicked.addListener(openTab);

