export {};

let name = 'Jon';

name = 'Jonson';

let nickname = 'Jon' as const;
nickname = 'Jon';

let profile = {
  name: 'Jon',
  height: 170,
} as const;

// profile.name = 'Jonson';
// profile.height = 190;
