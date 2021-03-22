import Character from './Character.js';

export default class MathChar extends Character {
	constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence, distance);
    this.distance = distance;
    this.stoned = '';
  }

  get attack() {
  	this.attack = this._attack * (1.1 - (this.distance/10));
  	if (this._stoned) {
  		this.attack = (this._attack * (1.1 - (this.distance/10))) - log2(this.distance) * 5;
  	}
    if (this.attack < 0) throw new Error('Атака не может быть < 0')
  }

  set attack(attack) {
  	this._attack = attack; 
  }

  get stoned() {
  	return this._stoned;
  } 

  set stoned(value) {
  	this._stoned = value;
  } 
}

