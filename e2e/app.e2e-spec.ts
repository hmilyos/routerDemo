import { RouterDemoPage } from './app.po';

describe('router-demo App', () => {
  let page: RouterDemoPage;

  beforeEach(() => {
    page = new RouterDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
