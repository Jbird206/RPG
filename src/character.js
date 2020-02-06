export class Character {
  constructor(name) {
    this.name = "Jak-san";
    this.type = "None";
    this.stats = {
      level: 1,
      hp: 10,
      strength: 10,
      dexterity: 10,
      Armor: 10,
      wisdom: 10
    };
    this.inventory = [];
  }

  checkType() {
    console.log(this.type);
    let type = this.type;
    if (type === "Samurai") {
      this.classSamurai();
    }
    if(type === "Tsukai-Ban"){
      this.classTsukaiBan();
    }
    if(type === "Ashgaru"){
      this.classAshigaru();
    }
    if(type === "Ninja"){
      this.classNinja();
    } else {
      return type;
    }
  }

  classSamurai() {
    this.type = "Samurai";
    this.inventory = ["Katana", "Leather Armor", "Sake"];
    this.stats = {
      hp: 10,
      str: 9,
      dex: 8,
      armor: 8,
      wis: 7
    };
  }
    
  classTsukaiBan() {
    this.type = "Tsukai-Ban";
    this.inventory = ["Yari", "Heavy Leather Armor", "Shield"];
    this.stats = {
      hp: 10,
      str: 10,
      dex: 5,
      armor: 10,
      wis: 7
    };
  }

  classAshigaru() {
    this.type = "Ashigaru";
    this.inventory = ["Bow", "Light Leather Armor", "Fire Bomb"];
    this.stats = {
      hp: 10,
      str: 7,
      dex: 10,
      armor: 6,
      wis: 8
    };
  }

  classNinja() {
    this.type = "Ninja";
    this.inventory = ["Kusarigama", "Cloth Armor", "Shuriken"];
    this.stats = {
      hp: 10,
      str: 6,
      dex: 10,
      armor: 4,
      wis: 10
    };
  }

  itemList() {
    this.item = "sword";
    this.item = "gold";
    this.item = "arrows";
    this.item = "armor";
  }

  xP() {
    this.XP += 4;
  }

  levelUp() {
    this.stats.level += 1;
    this.stats.hp +=1;
    this.stats.strength +=1;
    this.stats.dexterity+=1;
    this.stats.armor +=1;
    this.stats.wisdom +=1;
  }
}



