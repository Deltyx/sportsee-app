/**
  * Format array in reverse order 
  * @param {array} array 
  * @returns reversed array
*/
export function performanceDataFormatter(array) {
  /**
    * Format XAxis ticks in french
    * @param {string} kind - english labels
    * @returns french labels
  */
  const xAxisFormatter = (kind) => {      
    switch (kind){
      case 1: return 'Cardio';
      case 2: return 'Energie';
      case 3: return 'Endurance';
      case 4: return 'Force';
      case 5: return 'Vitesse';
      case 6: return 'Intensité';
      default: return null;
    }
  }
  const dataReversedArray = []
  for(let i=array.length - 1; i >= 0; i --){
    dataReversedArray.push({value:array[i].value, kind:xAxisFormatter(array[i].kind)})
  }
  return dataReversedArray
}

/**
  * Format array in with day of the week
  * @param {array} array 
  * @returns array with day of the week
*/

export function sessionDurationDataFormatter(array) {
  /**
    * Format XAxis ticks
    * @param {Number} day - day of the week
    * @returns corresponding letter of the day
  */
  const xAxisFormatter = (day) => {
  switch(day){
      case 1: return 'L';
      case 2: return 'M';
      case 3: return 'M';
      case 4: return 'J';
      case 5: return 'V';
      case 6: return 'S';
      case 7: return 'D';
      default: return '';
    }
  }

  const data = []
  array.forEach(element => {
    data.push({day: xAxisFormatter(element.day), sessionLength: element.sessionLength})
  });

  return data;
}

/**
  * Format array in with date
  * @param {array} array 
  * @returns array with date
*/

export function activityDataFormatter(array) {
  /**
    * Get the day in the date
    * @param {string} value - full date
    * @returns {number {1-31} } number of the day
  */
  const xAxisTickFormatter = (value) => {
    const valueDay = value.split('-')
    
    return (Number(valueDay[2]))
  }

  const data = []
  array.forEach(element => {
    data.push({day: xAxisTickFormatter(element.day), kilogram: element.kilogram, calories: element.calories})
  })

  return data
}