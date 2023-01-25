export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello'

const example1 = {
  name: 'Jon',
  age: 100
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Jon',
  age: 100
};

type Profile2 = typeof example1;