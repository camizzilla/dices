/*jshint esversion: 6 */

window.onload = () => {
  'use strict';
  let container = document.getElementById("container");
  let throwBtn = document.getElementById("throw-btn");

  class dice {
    constructor() {
      this.el = this.createDice();
      this.timer = 0;
      this.timeDeceleration = 1;
      this.diceValue = 6;
      this.diceFaces = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

      this.el.addEventListener("click", this.throw.bind(this), false);

      this.init();
    }
    
    init() {
      this.print(this.random());
    }
    
    createDice() {
      let div = document.createElement('div');
      div.setAttribute('class', 'dice');
      return div;
    }
    
    console(res) {
      return console.log(`Il risultato è ${res} 🎲`);
    }
    
    stop() {
      clearTimeout(this.timer);
      this.timeDeceleration = 1;
      this.console(this.result);
    }

    random() {
      return Math.floor(Math.random() * this.diceValue);
    }

    print(res) {
      this.el.innerHTML = this.diceFaces[res];
    }

    processing() {
      let rand = this.random();
      this.print(rand);
      return rand + 1;
    }

    cycle() {
      this.timeDeceleration += 20;
      this.result = this.processing();
      this.timer = setTimeout(this.cycle.bind(this), this.timeDeceleration);
    }

    throw () {
      setTimeout(this.stop.bind(this), 1000 * this.random());
      this.cycle();
    }

  }
  let dices = [];
  let diceCreator = (nDice) => {
    for (let i = 0; i < nDice; i++) {
      let newDice = new dice();
      container.appendChild(newDice.el);
      dices.push(newDice);
    }
  };

  diceCreator(3);
  
  let diceCycleFor = () => dices.forEach(dice => dice.throw());
  throwBtn.addEventListener("click", () => diceCycleFor());

};