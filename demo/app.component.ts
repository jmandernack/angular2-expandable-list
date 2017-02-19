import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <expandable-list>
      <expandable-list-item *ngFor="let item of items">
        <span title>{{ item.title }}</span>
        <a item *ngFor="let i of item.items"
           [href]="i.link">
          {{ i.title }}
        </a>
      </expandable-list-item>

      <expandable-list-item disabled>
        <span title>Manual</span>
        <span secondary>disabled</span>
      </expandable-list-item>

      <expandable-list-item>
        <span title>Manual</span>
        <span secondary>enabled</span>
        <a href="http://www.goo.gl">Something else</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>

        <expandable-list-divider item></expandable-list-divider>

        <a item href="http://www.goo.gl">Google</a>
      </expandable-list-item>
    </expandable-list>
  `
})
export class AppComponent {
  items: any;


  constructor() {
    this.items = [
      {
        title: 'Spices',
        items: [
          {
            title: 'salt',
            link: 'https://en.wikipedia.org/wiki/Salt'
          },
          {
            title: 'Black pepper',
            link: 'https://en.wikipedia.org/wiki/Black_pepper'
          },
        ]
      },
      {
        title: 'Cats',
        items: [
          {
            title: 'Siberian',
            link: 'https://en.wikipedia.org/wiki/Siberian_cat'
          },
          {
            title: 'Maine Coon',
            link: 'https://en.wikipedia.org/wiki/Maine_Coon'
          },
          {
            title: 'American Bobtail',
            link: 'https://en.wikipedia.org/wiki/American_Bobtail'
          },
          {
            title: 'British Longhair',
            link: 'https://en.wikipedia.org/wiki/British_Longhair'
          },
        ]
      },
    ];
  }
}
