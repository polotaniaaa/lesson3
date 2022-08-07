
let date = new Date(),
day = date.getDate(),
month = date.getMonth()+1,
year = date.getFullYear();

const captionString = (`Foodprices ≠ ${day}.${month}.${year}`).replaceAll('≠', '-');

console.log(captionString);

let    apple = `🍎`,
    applePrice = 10,
    appleCount = 3,
    appleSalePercent = 7;

    let applePriceWithPercent = applePrice - ((appleSalePercent/10) * applePrice); 
    let finalApplePrice = applePriceWithPercent * appleCount;

 console.log(finalApplePrice);


   let orange = `🍊`,
    orangePrice = 12,
    orangeCount = 2,
    orangeSalePercent = 3;

    let orangePriceWithPercent = ((orangeSalePercent/12)*orangePrice);
    let finalOrangePrice = orangePriceWithPercent * orangeCount;

    console.log(finalOrangePrice);

  let  kiwi = `🥝`,
    kiwiPrice = 15,
    kiwiCount = 10,
    kiwiCountryPercent = 10;

    let kiwiPriceWithPercent = kiwiPrice +((kiwiCountryPercent/10)*kiwiPrice);
    let finalKiwiPrice = kiwiPriceWithPercent * kiwiCount;

    console.log(finalKiwiPrice);

let finalFruitPrice = finalApplePrice + finalKiwiPrice + finalOrangePrice

console.log(finalFruitPrice);



function newFunction() {
  const captionString = FoodPrices; "${day}.${month}.${year}.replaceAll('≠', '-');";
  return captionString;
}

