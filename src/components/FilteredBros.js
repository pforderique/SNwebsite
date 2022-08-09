import brothers from '../../data/brothers.json'

brothers.sort((bro1, bro2) => bro1.pin - bro2.pin);

const filteredBros = {
                        year: {
                                2024: [],
                                2023: [],
                                2022: [],
                                2021: [],
                              },
                        state: {},
                        course: {}
};

for (let ix in brothers){
  let bro = brothers[ix]

  let year = bro.year;
  filteredBros.year[year].push(bro.name);

  let homestate = (bro.name.includes('Suleman') ? 'Pakistan' : bro.hometown.slice(-2));
  if (homestate in filteredBros.state){
    filteredBros.state[homestate].push(bro.name);
  } else {
    filteredBros.state[homestate] = [bro.name];
  }

  let major = bro.major.split(':')[0]
  if (major.includes('&')){
    major = major.split(' & ');
  }
  if (typeof(major) == 'string'){
    if (major in filteredBros.course){
      filteredBros.course[major].push(bro.name);
    } else {
      filteredBros.course[major] = [bro.name];
    }
  } else {
    for (let m of major){
      if (m in filteredBros.course){
        filteredBros.course[m].push(bro.name);
      } else {
        filteredBros.course[m] = [bro.name];
      }
    }
  }
}

export { brothers, filteredBros }