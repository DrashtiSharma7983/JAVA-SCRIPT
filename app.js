// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country=["Australia","Germany","UnitedStatesofAmerica"]
// output:"UnitedStatesofAmerica"

let country=["Australia","Germany","UnitedStatesofAmerica","i loe to learn new things daily."];
function logestName(country){
    let count = 0;
    for(let i=0;i<country.length;i++){
        let ansLen= country[count].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            count = i;
        }
    } return country[count];
}
logestName(country);