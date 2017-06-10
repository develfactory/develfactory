import { DevelfactoryPage } from './app.po';

describe('develfactory App', () => {
  let page: DevelfactoryPage;

  beforeEach(() => {
    page = new DevelfactoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
