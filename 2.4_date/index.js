function dateFeature(today) {
   
  let date = new Date();

  let currentDay = date.toLocaleString('en-us', {weekday:'long'});
  let dayOfMonth = date.getDate();
  let currentMonth = date.toLocaleString('default', { month: 'long' });
  let currentYear = date.getFullYear();
  

   console.log(`Today is ${currentDay} the ${dayOfMonth} of ${currentMonth} ${currentYear}`);

}

dateFeature();