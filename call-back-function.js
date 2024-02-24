function getDayNight(getting, name) {
   getting(name);
};

function gettingMorning(name){
    console.log('good morning', name);
};


function gettingEvening(name){
    console.log('good Evening',name);
};


function gettingNight(name){
    console.log('Good Night', name);
};


getDayNight(gettingMorning ,'Teli Samad');
getDayNight(gettingEvening,'Alex Rose');
getDayNight(gettingNight,'Tom Adam');

