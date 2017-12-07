import { browser, by, element } from 'protractor';

export class HomeopatiaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('homeo-root h1')).getText();
  }
}
