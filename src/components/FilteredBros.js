// import brothers from '../../data/brothers.json'
import allBrothers from '../../data/all-brothers.json'
import nopic from '../assets/images/brothers/nopic.jpg'

// brothers.sort((bro1, bro2) => bro1.pin - bro2.pin);

// Clean allBrothers
const infty = Math.pow(2, 12);
for (const bro of allBrothers) {
    bro.timestamp = bro.timestamp || '1/1/1869';
    bro.name = bro.name || '';
    bro.kerb = bro.kerb || '';
    bro.major = bro.major || '';
    bro.year = bro.year || 1869;
    bro.pin = bro.pin || infty;
    bro.nickname = bro.nickname || '';
    bro.hometown = bro.hometown || '';
    bro.bio = bro.bio || '';
    bro.funMemoryWithAnotherBrother = bro.funMemoryWithAnotherBrother || '';
    bro.img = bro.img || nopic;
    bro.role = bro.role || '';
    bro.active = bro.active || false;
}

allBrothers.sort((bro1, bro2) => 
  (bro1.pin || Number.POSITIVE_INFINITY) - (bro2.pin || Number.POSITIVE_INFINITY));

// console.log('brothers', allBrothers);

const filteredBros = {
  year: {
    2024: [],
    2023: [],
    2022: [],
    2021: [],
  },
  state: {},
  course: {},
};

// for (let ix in brothers){
//   let bro = brothers[ix]

//   let year = bro.year;
//   filteredBros.year[year].push(bro.name);

//   let homestate = (bro.name.includes('Suleman') ? 'Pakistan' : bro.hometown.slice(-2));
//   if (homestate in filteredBros.state){
//     filteredBros.state[homestate].push(bro.name);
//   } else {
//     filteredBros.state[homestate] = [bro.name];
//   }

//   let major = bro.major.split(':')[0]
//   if (major.includes('&')){
//     major = major.split(' & ');
//   }
//   if (typeof(major) == 'string'){
//     if (major in filteredBros.course){
//       filteredBros.course[major].push(bro.name);
//     } else {
//       filteredBros.course[major] = [bro.name];
//     }
//   } else {
//     for (let m of major){
//       if (m in filteredBros.course){
//         filteredBros.course[m].push(bro.name);
//       } else {
//         filteredBros.course[m] = [bro.name];
//       }
//     }
//   }
// }

export { /**brothers,*/allBrothers as brothers, filteredBros }