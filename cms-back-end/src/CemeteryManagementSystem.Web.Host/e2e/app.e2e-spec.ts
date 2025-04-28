import { CemeteryManagementSystemTemplatePage } from './app.po';

describe('CemeteryManagementSystem App', function() {
  let page: CemeteryManagementSystemTemplatePage;

  beforeEach(() => {
    page = new CemeteryManagementSystemTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
