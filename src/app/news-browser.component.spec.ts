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

  it('should have a sidenav view whose first name is \'My Account\'',
      inject([NewsBrowserAppComponent], (app: NewsBrowserAppComponent) => {
    expect(app.views)[0].name.toEqual('My Account');
  }));
});
