const hq = 42
function distanceFromHqInBlocks(pickup){
    return pickup > hq? pickup - hq : hq - pickup; 
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(34)

let distanceFromHqInFeet = function (unit){
    let distance = distanceFromHqInBlocks(unit) * 264
    return distance;
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination) {

    return start > destination? (start - destination)*264 : (destination - start)*264

}
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, end) {
    let theDistance=distanceTravelledInFeet(start, end)

    let fare;
    // switch (theDistance) {
    //     case theDistance <= 400:
    //         fare = 0;
    //         break;
    //     case theDistance > 400 && theDistance <= 2000:
    //         fare = 0.02 * (theDistance-400);
    //         break;
    //     case theDistance > 2000 && theDistance <= 2500:
    //         fare = 25;
    //         break;
    //     default: 
    //         fare = 'cannot travel that far'
    // }
    //  return fare
    if (theDistance <=400){
        fare = 0
    }else if(theDistance>400 && theDistance <= 2000){
        fare = 0.02 * (theDistance-400)
    }else if(theDistance>2000 && theDistance <=2500){
        fare = 25
    }else {
        return `cannot travel that far`
    }
    return fare
}
console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))
