// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    }

    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in  combat`

    }


}


// War
class War {
    constructor() {

        this.vikingArmy = [];
        this.saxonArmy = [];
    }

        addViking(Viking) { 
            this.vikingArmy += Viking
        }
        addSaxon(Saxon) {
            this.saxonArmy += Saxon

        }
        vikingAttack(){


        }
        saxonAttack(){}
        showStatus(){}
    }


