import { NgPipesPage } from './app.po';

describe('ng-pipes App', () => {
  let page: NgPipesPage;

  beforeEach(() => {
    page = new NgPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
