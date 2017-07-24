import { SampleProjectPage } from './app.po';

describe('sample-project App', () => {
  let page: SampleProjectPage;

  beforeEach(() => {
    page = new SampleProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
