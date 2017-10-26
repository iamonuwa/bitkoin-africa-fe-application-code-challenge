import { BitkoinPage } from './app.po';

describe('bitkoin App', () => {
  let page: BitkoinPage;

  beforeEach(() => {
    page = new BitkoinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
