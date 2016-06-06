import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NewsBrowserAppComponent } from '../app/news-browser.component';

beforeEachProviders(() => [NewsBrowserAppComponent]);

describe('App: NewsBrowser', () => {
  it('should create the app',
      inject([NewsBrowserAppComponent], (app: NewsBrowserAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'news-browser works!\'',
      inject([NewsBrowserAppComponent], (app: NewsBrowserAppComponent) => {
    expect(app.title).toEqual('news-browser works!');
  }));
});
