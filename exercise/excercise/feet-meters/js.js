function feetToMeter(numFeet) {
    numFeet = parseFloat(numFeet);
    document.getElementById('outputMeters').innerHTML = 0.305 * numFeet;
    return numFeet;
}
function meterToFeet(numMeter) {
    numMeter = parseFloat(numMeter);
    document.getElementById('outputFeet').innerHTML = 3.279 * numMeter;
    return numMeter;
}