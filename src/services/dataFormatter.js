/**
   * Format array in reverse order 
   * @param {array} array 
   * @returns reversed array
*/
export function performanceDataFormatter(array){

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