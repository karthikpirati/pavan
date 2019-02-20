import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  expandedItems: any = [];
  headerData: any = [];
  testData: any=[];

  constructor() {
    this.name = 'Angular2';
    this.testData = [
      {
        name: 'VIP',
        ndcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ],
        dxcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ]
      },
      {
        name: 'VDS',
        ndcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ],
        dxcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ]
      },
      {
        name: 'VIP 2.0',
        ndcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ],
        dxcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ]
      },
      {
        name: 'SMS',
        ndcUrls: [
          { name: "devUrl", url: "http://www.google.com" },
          { name: "sitUrl", url: "http://www.google.com" },
          { name: "uatUrl", url: "http://www.google.com" },
          { name: "prodUrl", url: "http://www.google.com" }
        ]
      },
      {
        name:'Support',
        urls:[
          { name: "url1", url: "http://www.google.com" },
          { name: "url2", url: "http://www.google.com" }
        ]
      }
    ];
  }

  toggleComment(item: number) {
    console.log(item);
    var exists = false;
    console.log(this.expandedItems);
    this.expandedItems.forEach(x => {
      if (x.name == this.testData[item].name) exists = true;
    });
    if (exists) {
      this.expandedItems= this.expandedItems.filter(x => x.name != this.testData[item].name);
    }
    else {
      this.expandedItems.push(this.testData[item]);
    }
    console.log(this.expandedItems);
  }

  routeTo(url: any) {
    window.open(url);
  }

}
