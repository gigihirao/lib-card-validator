let cardNumber;
var error = function (){
    if (cardNumber.length === 0 || cardNumber === "" || cardNumber.length != 16){
        throw new TypeError ("Invalid Card");
    };
};
function cardValidator(numb){
  let reverseSequence = [];
  let cardInverted = [];
  let doubledPairs = 0;
  let sumOfNumbs = 0;
  let newCardNumb = [];
  do{
    cardNumber = prompt('Insira o número do Cartão de Crédito');
  } while (!cardNumber);
  
  for (var i = 0 ; i < numb.length ; i++){
    reverseSequence[i] = numb.charAt(i);
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

  if  (sumOfNumbs % 10 == 0){
    document.getElementById('app').innerHTML = 'Válido';
  } else {
    document.getElementById('app').innerHTML = 'Inválido';
  }
}

isValidCard(cardNumber);
