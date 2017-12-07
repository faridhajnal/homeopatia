import { HomeopatiaPage } from './app.po';

describe('homeopatia App', () => {
  let page: HomeopatiaPage;

  beforeEach(() => {
    page = new HomeopatiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to homeo!!');
  });
});
