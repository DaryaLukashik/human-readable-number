const { re } = require("semver")

function one_to_nine(number){
  switch (number){
    case 1:
      return 'one'
    case 2:
      return 'two'
    case 3:
      return 'three'
    case 4:
      return 'four'
    case 5:
      return 'five'
    case 6:
      return 'six'
    case 7:
      return 'seven'
    case 8:
      return 'eight'
    case 9:
      return 'nine'
    default:
      return ''             
  }
}

function ten(number){
  switch (number){
    case 2:
      return 'twenty'
    case 3:
      return 'thirty'
    case 4:
      return 'forty'
    case 5:
      return 'fifty'
    case 6:
      return 'sixty'
    case 7:
      return 'seventy'
    case 8:
      return 'eighty'
    case 9:
      return 'ninety' 
    default:
      return ''              
  }
}

function ten_to_nineteen(number){
  switch (number){
    case 10:
      return 'ten'
    case 11:
      return 'eleven'
    case 12:
      return 'twelve'
    case 13:
      return 'thirteen'
    case 14:
      return 'fourteen'
    case 15:
      return 'fifteen'
    case 16:
      return 'sixteen'
    case 17:
      return 'seventeen'
    case 18:
      return 'eighteen'
    case 19:
      return 'nineteen' 
    default:
      return ''                
  }
}

function modulo_ten(number){
  return number % 10 == 0 ?
    ten(Math.floor(number/10)) :
    ten(Math.floor(number/10)) + ' '
}

function modulo_hundred(number){
  return number % 100 == 0 ?
   one_to_nine(Math.floor(number/100)) + ' hundred': 
   one_to_nine(Math.floor(number/100)) + ' hundred' + ' '
}

function second_part_of_hundred(number){
  if (number % 100 <= 9 ){
    return one_to_nine(number % 100)
  } else if(number % 100 <= 19){
    return ten_to_nineteen(number % 100)
  } else {
    return modulo_ten(number % 100) + one_to_nine(number % 10)
  }

}

module.exports = function toReadable (number) {
  let readable_number = ''
  if (number == 0){
    return 'zero'
  } else if(number <= 9){
    return one_to_nine(number)
  } else if(number <= 19 ){
    return ten_to_nineteen(number)
  } else if (number < 100){
    return modulo_ten(number) + one_to_nine(number % 10)
  } else {
    return modulo_hundred(number) + second_part_of_hundred(number)
  }
}
  
