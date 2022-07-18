export const fillBirthDate = (name, value, birth_date) => {
    let newValue = value;
    if(birth_date.length === 1 || birth_date.length === 4) {
      newValue = value + '/'
      if(newValue.includes('//')) {
        newValue = birth_date.substring(0,3);
      }
      if(newValue.includes('/') && (newValue.length === 1)) newValue = '';
      return newValue;
    }
    if(newValue.length > 10) newValue = newValue.substring(0,10);
    return newValue;
  }