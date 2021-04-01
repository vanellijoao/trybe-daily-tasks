const newEmployee = (fullname) => {
    const names = fullname.toLowerCase().split(' ');
    return {
        nomeCompleto: fullname,
        email: `${names[0]}.${names[1]}@trybe.com`
    }
}

const newEmployees = () => {
    const employees = {
      id1: newEmployee('Pedro Guerra'),
      id2: newEmployee('Luiza Drumond'),
      id3: newEmployee('Carla Paiva')
    }
    return employees;
  };

console.log(newEmployees())