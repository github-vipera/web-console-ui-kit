import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-simple-test-module',
  template: `
    <p>
      my-simple-test-module works!
    </p>
  `,
  styles: []
})
export class MySimpleTestModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
