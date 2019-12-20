import { VPasswordManagerPage } from './app.po';

describe('v-password-manager App', function() {
  let page: VPasswordManagerPage;

  beforeEach(() => {
    page = new VPasswordManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
