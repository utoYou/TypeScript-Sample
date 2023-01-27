export {};

class VisaCard {
  constructor(public readonly owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('Jon');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
