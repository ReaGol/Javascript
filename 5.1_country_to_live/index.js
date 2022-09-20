const countryToLiveIn = function(language, isIland, population, country) {
    if(language ==='English' && isIland === false && population <= 50,000,000)
        console.log(`you should live in ${country}`);
    else 
        console.log(`${country} does not meet your criteria`)
}