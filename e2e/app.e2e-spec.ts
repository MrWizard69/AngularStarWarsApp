import { WhiteBoardPage } from './app.po';

describe('white-board App', () => {
  let page: WhiteBoardPage;

  beforeEach(() => {
    page = new WhiteBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
