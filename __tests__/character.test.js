import { Character } from './../src/character';

describe('Character', () => {

  let reusableChar;

  beforeEach(() => {
    reusableChar = new Character('Jak-san');
  });

  test('Type should equal None when we use checkType function', () => {
    expect(reusableChar.checkType()).toEqual("None");
  });

  test('Type should equal Samurai and all stats should equal Samurai stats when we use the classSamurai function', () => {
    reusableChar.classSamurai();
    expect(reusableChar.type).toEqual("Samurai");
    expect(reusableChar.inventory[0]).toEqual("Katana");
    expect(reusableChar.stats.hp).toEqual(10);
    expect(reusableChar.stats.str).toEqual(9);
    expect(reusableChar.stats.dex).toEqual(8);
    expect(reusableChar.stats.armor).toEqual(8);
    expect(reusableChar.stats.wis).toEqual(7);
  });

  test('Type should equal Tsukai-Ban and all stats should equal Tsukai-Ban stats when we use the classTsukaiBan function', () => {
    reusableChar.classTsukaiBan();
    expect(reusableChar.type).toEqual("Tsukai-Ban");
    expect(reusableChar.inventory[0]).toEqual("Yari");
    expect(reusableChar.stats.hp).toEqual(10);
    expect(reusableChar.stats.str).toEqual(10);
    expect(reusableChar.stats.dex).toEqual(5);
    expect(reusableChar.stats.armor).toEqual(10);
    expect(reusableChar.stats.wis).toEqual(7);
  });

  test('Type should equal Ashigaru and all stats should equal Ashigaru stats when we use the classAshigaru function', () => {
    reusableChar.classAshigaru();
    expect(reusableChar.type).toEqual("Ashigaru");
    expect(reusableChar.inventory[0]).toEqual("Bow");
    expect(reusableChar.stats.hp).toEqual(10);
    expect(reusableChar.stats.str).toEqual(7);
    expect(reusableChar.stats.dex).toEqual(10);
    expect(reusableChar.stats.armor).toEqual(6);
    expect(reusableChar.stats.wis).toEqual(8);
  });

  test('Type should equal Ninja and all stats should equal Ninja stats when we use the classNinja function', () => {
    reusableChar.classNinja();
    expect(reusableChar.type).toEqual("Ninja");
    expect(reusableChar.inventory[0]).toEqual("Kusarigama");
    expect(reusableChar.stats.hp).toEqual(10);
    expect(reusableChar.stats.str).toEqual(6);
    expect(reusableChar.stats.dex).toEqual(10);
    expect(reusableChar.stats.armor).toEqual(4);
    expect(reusableChar.stats.wis).toEqual(10);
  });
 
});