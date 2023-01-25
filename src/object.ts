export {};

let profile1: object = { name: 'Jon' };
profile1 = { birthYear: 1920 };

let profile2: {
  name: string;
} = { name: 'Jon' };
profile2 = { name: 'Jonson' };