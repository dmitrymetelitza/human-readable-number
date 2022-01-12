module.exports = function toReadable (number) {
    let a = number.toString() // перевод в строку для подсчета количества цифр
    let one = a[0]
    let two = a[1]
    let three = a[2]
    let four = a[3]

            
let SmallNumber = [
           ' ',
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten',
          'eleven',
          'twelve',
          'thirteen',
          'fourteen',
          'fifteen',
          'sixteen',
          'seventeen',
          'eighteen',
          'nineteen',
                  ]
let BigNumber = [ 
                ' ',
              'ten',
           'twenty',
           'thirty',
           'forty',
           'fifty',
           'sixty',
           'seventy',
           'eighty',
           'ninety',
                   ]
         if ( number === 0){
        return "zero"
        }        
          if (number > 0 && number < 10 ) {
          return SmallNumber[one]; 
         }
          if (9 < number && number < 20 ) {
          return SmallNumber[one+two]
         }
        if (19 < number && number < 100 && number % 10 == 0 ) {
         return BigNumber[one] 
        }
        if (19 < number && number < 100) {
         return BigNumber[one] + " " + SmallNumber[two]
        }
        if ( number % 100 == 0){
         return SmallNumber[one] + " hundred"    
        }
        if ( 99 < number && number < 1000 && three == 0 ) {
         return SmallNumber[one] + " hundred "  + BigNumber[two]
        }
        if ( 99 < number && number < 1000 && two == 0 ) {
         return SmallNumber[one] + " hundred "  + SmallNumber[three]
        }
        if ( 99 < number && number < 1000 && three == 0 ) {
         return SmallNumber[one] + " hundred "  + SmallNumber[two]
        }
        if ( 99 < number && number < 1000 && 10 < (two+three) && (two+three) < 20  ) {
         return SmallNumber[one] + " hundred "  + SmallNumber[two+three]
        }
        if ( 99 < number && number < 1000 ) {
         return SmallNumber[one] + " hundred " + BigNumber[two] + " " + SmallNumber[three]
        }
         return "Too much value"
} 
