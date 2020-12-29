import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LitElement, html } from 'lit-element';



@Component({
  selector: 'app-web-component',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.css']
})
export class WebComponentComponent extends LitElement {
  interval: number;
  now: number;


  static get properties() {
    return { 
      now: { type: String }
    };
  }

  connectedCallback() {
    // Be sure to call the super
    super.connectedCallback();
    this.interval = window.setInterval(() => {
      this.now = Date.now();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.clearInterval(this.interval);
  }

  render() {
    return html`<h1>It is ${this.now}</h1>`;
  }
  
}

customElements.define('web-component',  WebComponentComponent);
