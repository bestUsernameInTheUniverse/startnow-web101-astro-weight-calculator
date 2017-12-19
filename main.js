// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];


function populatePlanetSelection() {
    planets.slice().reverse().forEach(function(element){
        var htmlString = '<option value="' + element[1] + '">' + element[0] + '</option>';
        $('#planets').append(htmlString);
    });
}


function refreshPlanetSelection () {
    $('#planets option').each(function (){
        this.remove();
    });
    populatePlanetSelection();
}


function calculateWeight(weight, planetName) {
    var planetIndex = planets.findIndex( function (element) {
        return element[0] === planetName;
    });

    return weight * planets[planetIndex][1];
}


function handleClickEvent (e) {
    var userWeight = $('#user-weight').val();
    var planetName = $('#planets option:selected').text();
    var result = calculateWeight(userWeight, planetName);
    var outputString = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
    $('#output').text(outputString);
}


function handlePlutoCheckboxChangeEvent(e) {
    if (e.target.checked) {
        let plutoArray = ['Pluto', 0.06];
        planets.unshift(plutoArray);
    }
    else {
        planets.shift(1);
    }
    refreshPlanetSelection();
}


function handleCustomPlanetButtonClickEvent(e) {
    let planetName = $('#custom-name').val();
    let multiplier = $('#custom-multiplier').val();

    if(!isNaN(multiplier)) {
        planets.push([planetName, multiplier]);
        refreshPlanetSelection();
    }
}

populatePlanetSelection();

$('#calculate-button').click(handleClickEvent);

$('#pluto-checkbox').change(handlePlutoCheckboxChangeEvent);

$('#add-custom-button').click(handleCustomPlanetButtonClickEvent);
