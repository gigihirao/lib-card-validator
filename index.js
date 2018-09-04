module.exports = cardValidator();
function cardValidator(number){

  let reverseSequence = [];
  let cardInverted = [];
  let doubledPairs = 0;
  let sumOfNumbs = 0;
  let newCardNumb = [];

  if (typeof(number) === "string"){
    throw new Error ('Somente números');
  }

  let cardNumber = String(number);

  if (cardNumber.length <= 1){
    throw new TypeError ("Conter mais que 1 digito");
  }

  for (var i = 0 ; i < number ; i++){
    reverseSequence[i] = number.charAt(i);
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
    return 'Válido';
  } else {
    return 'Inválido';
  }
}