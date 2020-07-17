function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var senior = [156, 288, 300];

for (var i = 0; i < senior.length; i++) {
    var element = senior[i];
    var newFeet = inchToFeet(element);
    console.log(newFeet);
}