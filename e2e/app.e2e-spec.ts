import { TypescriptChartPage } from './app.po';

describe('typescript-chart App', () => {
  let page: TypescriptChartPage;

  beforeEach(() => {
    page = new TypescriptChartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
