export class NewsBrowserPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('news-browser-app h1')).getText();
  }
}
