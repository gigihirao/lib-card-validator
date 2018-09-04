module.exports = cardValidator;
function cardValidator(number){

  let reverseSequence = [];
  let cardInverted = [];
  let doubledPairs = 0;
  let sumOfNumbs = 0;
  let newCardNumb = [];

  if (typeof(number) === 'string'){
    throw new Error ('Aceita-se somente números');
  }

  let cardNumber = String(number);

  if (cardNumber.length <= 1){
    throw new TypeError ('Deve conter mais de 1 dígito');
  }

  for (var i = 0 ; i < cardNumber.length ; i++){
    reverseSequence[i] = cardNumber.charAt(i);
  }
  cardInverted = reverseSequence.reverse();
  for (var j = 1 ; j < cardInverted.length ; j+=2){
    doubledPairs = cardInverted[j] * 2;
    if (doubledPairs >= 10){
      newCardNumb = doubledPairs.toString().split("");
      sumOfNumbs = parseInt(newCardNumb[0]) + parseInt(newCardNumb[1]) + sumOfNumbs;
    } else {
      sumOfNumbs = doubledPairs + sumOfNumbs;
    }
  }

  for (var j = 0 ; j < cardInverted.length ;  j+=2) {
    sumOfNumbs = parseInt(cardInverted[j]) + sumOfNumbs;
  }

  if (sumOfNumbs % 10 == 0){
    return true;
  } else {
    return false;
  }
}