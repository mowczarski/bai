class Person {
    constructor(imie, nazwisko) {
      this.imie = imie;
      this.nazwisko = nazwisko;
    }
  
    get surnameToUpper() {
      return this.imie + " " + this.nazwisko.toUpperCase();
    }
  
    get inicjal() {
      return this.imie[0] + "." + this.nazwisko[0];
    }
  }
  
  let per1 = new Person("Mariusz", "Owczaski");
  let per2 = new Person("Jan", "Nowak");
  
  console.log(per1.surnameToUpper);
  console.log(per1.inicjal);
  