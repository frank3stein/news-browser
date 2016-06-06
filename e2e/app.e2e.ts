import { NewsBrowserPage } from './app.po';

describe('news-browser App', function() {
  let page: NewsBrowserPage;

  beforeEach(() => {
    page = new NewsBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('news-browser works!');
  });
});
