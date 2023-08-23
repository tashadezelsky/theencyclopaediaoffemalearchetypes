console.log('yo yo');

console.log("please work");

const btn = document.getElementById('pink-mode-toggle');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Foundational';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Developing';
  } else {
    btn.textContent = initialText;
  }
});

// check for saved 'darkMode' in localStorage
let pinkMode = localStorage.getItem('pinkMode'); 

const pinkModeToggle = document.querySelector('#pink-mode-toggle');

const enablePinkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('pinkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('pinkMode', 'enabled');
}

const disablePinkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('pinkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('pinkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (pinkMode === 'enabled') {
  enablePinkMode();
}

// When someone clicks the button
pinkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  pinkMode = localStorage.getItem('pinkMode'); 
  
  // if it not current enabled, enable it
  if (pinkMode !== 'enabled') {
    enablePinkMode();
  // if it has been enabled, turn it off  
  } else {  
    disablePinkMode(); 
  }
});

/*-- air table api school v--*/

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyHlLjNPepQaUXmp'}).base('appPIEihJz4R8rE05');

base('a').select({}).eachPage(gotPageOfInfos, gotAllInfos);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infos = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfos (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infos.push(...records);
    fetchNextPage();
}

function gotAllInfos (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfos();
showInfos();
}


function consoleLogInfos() {
    console.log("consoleLogInfos()");
    infos.forEach((info) => {
    console.log("Info:", info);
});
}

/* -- showing data in container --*/

function showInfos() {
  console.log("showInfos()");
  infos.forEach((info) => {

        //showing names


        var nameWholeA = document.createElement("a");
        nameWholeA.classList.add("titlenamea");
        nameWholeA.innerText = info.fields.title;
        nameWholeA.href = info.fields.source;
        /*document.querySelector("#a-class").append(nameTitle);*/
        document.querySelector(".a-class").append(nameWholeA);

       //sorts array into alphabetical order
        $('.titlenamea').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.a-class');

        /*var nameTitleA = document.createElement("a");
        nameTitleA.classList.add("charactername");
        nameTitleA.innerText = info.fields.title;
        nameTitleA.href = info.fields.source;
        nameWholeA.append(nameTitleA);*/

        var nameReferenceA = document.createElement("i");
        nameReferenceA.classList.add("referencename");
        nameReferenceA.innerText = info.fields.reference;
        nameWholeA.append(nameReferenceA);

        var nameArchetypeA = document.createElement("p");
        nameArchetypeA.classList.add("archetypename");
        nameArchetypeA.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeA.append(nameArchetypeA);

        var nameSubarchetypeA = document.createElement("p");
        nameSubarchetypeA.classList.add("subarchetypename");
        nameSubarchetypeA.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeA.append(nameSubarchetypeA);

})

}

/* B */

base('b').select({}).eachPage(gotPageOfInfosB, gotAllInfosB);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosb = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosB (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosb.push(...records);
    fetchNextPage();
}

function gotAllInfosB (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosB();
showInfosB();
}


function consoleLogInfosB() {
    console.log("consoleLogInfosB()");
    infosb.forEach((info) => {
    console.log("InfoB:", info);
});
}

/* -- showing data in container --*/

function showInfosB() {
  console.log("showInfosB()");
  infosb.forEach((info) => {

        //showing names

        var nameWholeB = document.createElement("li");
        nameWholeB.classList.add("titlenameb");
        document.querySelector(".b-class").append(nameWholeB);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenameb').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.b-class');

        var nameTitleB = document.createElement("a");
        nameTitleB.classList.add("charactername");
        nameTitleB.innerText = info.fields.title;
        nameTitleB.href = info.fields.source;
        nameWholeB.append(nameTitleB);

        var nameReferenceB = document.createElement("i");
        nameReferenceB.classList.add("referencename");
        nameReferenceB.innerText = info.fields.reference;
        nameWholeB.append(nameReferenceB);

        var nameArchetypeB = document.createElement("p");
        nameArchetypeB.classList.add("archetypename");
        nameArchetypeB.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeB.append(nameArchetypeB);

        var nameSubarchetypeB = document.createElement("p");
        nameSubarchetypeB.classList.add("subarchetypename");
        nameSubarchetypeB.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeB.append(nameSubarchetypeB);
 

})

}    

/* C */

base('c').select({}).eachPage(gotPageOfInfosC, gotAllInfosC);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosc = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosC (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosc.push(...records);
    fetchNextPage();
}

function gotAllInfosC (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosC();
showInfosC();
}


function consoleLogInfosC() {
    console.log("consoleLogInfosC()");
    infosc.forEach((info) => {
    console.log("InfoC:", info);
});
}

/* -- showing data in container --*/

function showInfosC() {
  console.log("showInfosC()");
  infosc.forEach((info) => {

        //showing names

        var nameWholeC = document.createElement("li");
        nameWholeC.classList.add("titlenamec");
        document.querySelector(".c-class").append(nameWholeC);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamec').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.c-class');

        var nameTitleC = document.createElement("a");
        nameTitleC.classList.add("titlename");
        nameTitleC.innerText = info.fields.title;
        nameTitleC.href = info.fields.source;
        nameWholeC.append(nameTitleC);

        var nameReferenceC = document.createElement("i");
        nameReferenceC.classList.add("referencename");
        nameReferenceC.innerText = info.fields.reference;
        nameWholeC.append(nameReferenceC);

        var nameArchetypeC = document.createElement("p");
        nameArchetypeC.classList.add("archetypename");
        nameArchetypeC.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeC.append(nameArchetypeC);

        var nameSubarchetypeC = document.createElement("p");
        nameSubarchetypeC.classList.add("subarchetypename");
        nameSubarchetypeC.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeC.append(nameSubarchetypeC);
 

})

} 

/* D */

base('d').select({}).eachPage(gotPageOfInfosD, gotAllInfosD);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosd = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosD (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosd.push(...records);
    fetchNextPage();
}

function gotAllInfosD (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosD();
showInfosD();
}


function consoleLogInfosD() {
    console.log("consoleLogInfosD()");
    infosd.forEach((info) => {
    console.log("InfoD:", info);
});
}

/* -- showing data in container --*/

function showInfosD() {
  console.log("showInfosD()");
  infosd.forEach((info) => {

        //showing names

        var nameWholeD = document.createElement("li");
        nameWholeD.classList.add("titlenamed");
        document.querySelector(".d-class").append(nameWholeD);

       //sorts array into alphabetical order
        $('.titlenamed').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.d-class');

        var nameTitleD = document.createElement("a");
        nameTitleD.classList.add("chartactername");
        nameTitleD.innerText = info.fields.title;
        nameTitleD.href = info.fields.source;
        nameWholeD.append(nameTitleD);

        var nameReferenceD = document.createElement("i");
        nameReferenceD.classList.add("referencename");
        nameReferenceD.innerText = info.fields.reference;
        nameWholeD.append(nameReferenceD);

        var nameArchetypeD = document.createElement("p");
        nameArchetypeD.classList.add("archetypename");
        nameArchetypeD.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeD.append(nameArchetypeD);

        var nameSubarchetypeD = document.createElement("p");
        nameSubarchetypeD.classList.add("subarchetypename");
        nameSubarchetypeD.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeD.append(nameSubarchetypeD);
 

})

} 

/* E */

base('e').select({}).eachPage(gotPageOfInfosE, gotAllInfosE);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infose = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosE (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infose.push(...records);
    fetchNextPage();
}

function gotAllInfosE (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosE();
showInfosE();
}


function consoleLogInfosE() {
    console.log("consoleLogInfosE()");
    infose.forEach((info) => {
    console.log("InfoE:", info);
});
}

/* -- showing data in container --*/

function showInfosE() {
  console.log("showInfosE()");
  infose.forEach((info) => {

        //showing names

        var nameWholeE = document.createElement("li");
        nameWholeE.classList.add("titlenamee");
        document.querySelector(".e-class").append(nameWholeE);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamee').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.e-class');

        var nameTitleE = document.createElement("a");
        nameTitleE.classList.add("charactername");
        nameTitleE.innerText = info.fields.title;
        nameTitleE.href = info.fields.source;
        nameWholeE.append(nameTitleE);

        var nameReferenceE = document.createElement("i");
        nameReferenceE.classList.add("referencename");
        nameReferenceE.innerText = info.fields.reference;
        nameWholeE.append(nameReferenceE);

        var nameArchetypeE = document.createElement("p");
        nameArchetypeE.classList.add("archetypename");
        nameArchetypeE.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeE.append(nameArchetypeE);

        var nameSubarchetypeE = document.createElement("p");
        nameSubarchetypeE.classList.add("subarchetypename");
        nameSubarchetypeE.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeE.append(nameSubarchetypeE);
 

})

} 

/* F */

base('f').select({}).eachPage(gotPageOfInfosF, gotAllInfosF);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosf = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosF (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosf.push(...records);
    fetchNextPage();
}

function gotAllInfosF (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosF();
showInfosF();
}


function consoleLogInfosF() {
    console.log("consoleLogInfosF()");
    infosf.forEach((info) => {
    console.log("InfoF:", info);
});
}

/* -- showing data in container --*/

function showInfosF() {
  console.log("showInfosF()");
  infosf.forEach((info) => {

        //showing names

        var nameWholeF = document.createElement("li");
        nameWholeF.classList.add("titlenamef");
        document.querySelector(".f-class").append(nameWholeF);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamef').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.f-class');
        
        var nameTitleF = document.createElement("a");
        nameTitleF.classList.add("charactername");
        nameTitleF.innerText = info.fields.title;
        nameTitleF.href = info.fields.source;
        nameWholeF.append(nameTitleF);

        var nameReferenceF = document.createElement("i");
        nameReferenceF.classList.add("referencename");
        nameReferenceF.innerText = info.fields.reference;
        nameWholeF.append(nameReferenceF);

        var nameArchetypeF = document.createElement("p");
        nameArchetypeF.classList.add("archetypename");
        nameArchetypeF.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeF.append(nameArchetypeF);

        var nameSubarchetypeF = document.createElement("p");
        nameSubarchetypeF.classList.add("subarchetypename");
        nameSubarchetypeF.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeF.append(nameSubarchetypeF);
 

})

} 

/* G */

base('g').select({}).eachPage(gotPageOfInfosG, gotAllInfosG);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosg = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosG (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosg.push(...records);
    fetchNextPage();
}

function gotAllInfosG (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosG();
showInfosG();
}


function consoleLogInfosG() {
    console.log("consoleLogInfosG()");
    infosg.forEach((info) => {
    console.log("InfoG:", info);
});
}

/* -- showing data in container --*/

function showInfosG() {
  console.log("showInfosG()");
  infosg.forEach((info) => {

        //showing names

        var nameWholeG = document.createElement("li");
        nameWholeG.classList.add("titlenameg");
        /*document.querySelector("#a-class").append(nameTitle);*/
        document.querySelector(".g-class").append(nameWholeG);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenameg').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.g-class');

        var nameTitleG = document.createElement("a");
        nameTitleG.classList.add("charactername");
        nameTitleG.innerText = info.fields.title;
        nameTitleG.href = info.fields.source;
        nameWholeG.append(nameTitleG);

        var nameReferenceG = document.createElement("i");
        nameReferenceG.classList.add("referencename");
        nameReferenceG.innerText = info.fields.reference;
        nameWholeG.append(nameReferenceG);

        var nameArchetypeG = document.createElement("p");
        nameArchetypeG.classList.add("archetypename");
        nameArchetypeG.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeG.append(nameArchetypeG);

        var nameSubarchetypeG = document.createElement("p");
        nameSubarchetypeG.classList.add("subarchetypename");
        nameSubarchetypeG.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeG.append(nameSubarchetypeG);
 

})

}

/* H */

base('h').select({}).eachPage(gotPageOfInfosH, gotAllInfosH);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosh = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosH (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosh.push(...records);
    fetchNextPage();
}

function gotAllInfosH (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosH();
showInfosH();
}


function consoleLogInfosH() {
    console.log("consoleLogInfosH()");
    infosh.forEach((info) => {
    console.log("InfoH:", info);
});
}

/* -- showing data in container --*/

function showInfosH() {
  console.log("showInfosH()");
  infosh.forEach((info) => {

        //showing names

        var nameWholeH = document.createElement("li");
        nameWholeH.classList.add("titlenameh");
        document.querySelector(".h-class").append(nameWholeH);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenameh').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.h-class');

        var nameTitleH = document.createElement("a");
        nameTitleH.classList.add("charactername");
        nameTitleH.innerText = info.fields.title;
        nameTitleH.href = info.fields.source;
        nameWholeH.append(nameTitleH);

        var nameReferenceH = document.createElement("i");
        nameReferenceH.classList.add("referencename");
        nameReferenceH.innerText = info.fields.reference;
        nameWholeH.append(nameReferenceH);

        var nameArchetypeH = document.createElement("p");
        nameArchetypeH.classList.add("archetypename");
        nameArchetypeH.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeH.append(nameArchetypeH);

        var nameSubarchetypeH = document.createElement("p");
        nameSubarchetypeH.classList.add("subarchetypename");
        nameSubarchetypeH.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeH.append(nameSubarchetypeH);
 

})

}

/* I */


base('i').select({}).eachPage(gotPageOfInfosI, gotAllInfosI);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosi = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosI (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosi.push(...records);
    fetchNextPage();
}

function gotAllInfosI (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosI();
showInfosI();
}


function consoleLogInfosI() {
    console.log("consoleLogInfosI()");
    infosi.forEach((info) => {
    console.log("InfoI:", info);
});
}

/* -- showing data in container --*/

function showInfosI() {
  console.log("showInfosI()");
  infosi.forEach((info) => {

        //showing names

        var nameWholeI = document.createElement("li");
        nameWholeI.classList.add("titlenamei");
        document.querySelector(".i-class").append(nameWholeI);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamei').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.i-class');

        var nameTitleI = document.createElement("a");
        nameTitleI.classList.add("charactername");
        nameTitleI.innerText = info.fields.title;
        nameTitleI.href = info.fields.source;
        nameWholeI.append(nameTitleI);

        var nameReferenceI = document.createElement("i");
        nameReferenceI.classList.add("referencename");
        nameReferenceI.innerText = info.fields.reference;
        nameWholeI.append(nameReferenceI);

        var nameArchetypeI = document.createElement("p");
        nameArchetypeI.classList.add("archetypename");
        nameArchetypeI.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeI.append(nameArchetypeI);

        var nameSubarchetypeI = document.createElement("p");
        nameSubarchetypeI.classList.add("subarchetypename");
        nameSubarchetypeI.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeI.append(nameSubarchetypeI);
 

})

}


/* J */


base('j').select({}).eachPage(gotPageOfInfosJ, gotAllInfosJ);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosj = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosJ (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosj.push(...records);
    fetchNextPage();
}

function gotAllInfosJ (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosJ();
showInfosJ();
}


function consoleLogInfosJ() {
    console.log("consoleLogInfosJ()");
    infosj.forEach((info) => {
    console.log("InfoJ:", info);
});
}

/* -- showing data in container --*/

function showInfosJ() {
  console.log("showInfosJ()");
  infosj.forEach((info) => {

        //showing names

        var nameWholeJ = document.createElement("li");
        nameWholeJ.classList.add("titlenamej");
        document.querySelector(".j-class").append(nameWholeJ);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamej').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.j-class');

        var nameTitleJ = document.createElement("a");
        nameTitleJ.classList.add("charactername");
        nameTitleJ.innerText = info.fields.title;
        nameTitleJ.href = info.fields.source;
        nameWholeJ.append(nameTitleJ);

        var nameReferenceJ = document.createElement("i");
        nameReferenceJ.classList.add("referencename");
        nameReferenceJ.innerText = info.fields.reference;
        nameWholeJ.append(nameReferenceJ);

        var nameArchetypeJ = document.createElement("p");
        nameArchetypeJ.classList.add("archetypename");
        nameArchetypeJ.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeJ.append(nameArchetypeJ);

        var nameSubarchetypeJ = document.createElement("p");
        nameSubarchetypeJ.classList.add("subarchetypename");
        nameSubarchetypeJ.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeJ.append(nameSubarchetypeJ);
 

})

}


/* K */


base('k').select({}).eachPage(gotPageOfInfosK, gotAllInfosK);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosk = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosK (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosk.push(...records);
    fetchNextPage();
}

function gotAllInfosK (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosK();
showInfosK();
}


function consoleLogInfosK() {
    console.log("consoleLogInfosK()");
    infosk.forEach((info) => {
    console.log("InfoK:", info);
});
}

/* -- showing data in container --*/

function showInfosK() {
  console.log("showInfosK()");
  infosk.forEach((info) => {

        //showing names

        var nameWholeK = document.createElement("li");
        nameWholeK.classList.add("titlenamek");
        document.querySelector(".k-class").append(nameWholeK);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamek').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.k-class');

        var nameTitleK = document.createElement("a");
        nameTitleK.classList.add("charactername");
        nameTitleK.innerText = info.fields.title;
        nameTitleK.href = info.fields.source;
        nameWholeK.append(nameTitleK);

        var nameReferenceK = document.createElement("i");
        nameReferenceK.classList.add("referencename");
        nameReferenceK.innerText = info.fields.reference;
        nameWholeK.append(nameReferenceK);

        var nameArchetypeK = document.createElement("p");
        nameArchetypeK.classList.add("archetypename");
        nameArchetypeK.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeK.append(nameArchetypeK);

        var nameSubarchetypeK = document.createElement("p");
        nameSubarchetypeK.classList.add("subarchetypename");
        nameSubarchetypeK.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeK.append(nameSubarchetypeK);
 

})

}


/* L */


base('l').select({}).eachPage(gotPageOfInfosL, gotAllInfosL);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosl = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosL (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosl.push(...records);
    fetchNextPage();
}

function gotAllInfosL (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosL();
showInfosL();
}


function consoleLogInfosL() {
    console.log("consoleLogInfosL()");
    infosl.forEach((info) => {
    console.log("InfoL:", info);
});
}

/* -- showing data in container --*/

function showInfosL() {
  console.log("showInfosL()");
  infosl.forEach((info) => {

        //showing names

        var nameWholeL = document.createElement("li");
        nameWholeL.classList.add("titlenamel");
        document.querySelector(".l-class").append(nameWholeL);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamel').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.l-class');

        var nameTitleL = document.createElement("a");
        nameTitleL.classList.add("charactername");
        nameTitleL.innerText = info.fields.title;
        nameTitleL.href = info.fields.source;
        nameWholeL.append(nameTitleL);

        var nameReferenceL = document.createElement("i");
        nameReferenceL.classList.add("referencename");
        nameReferenceL.innerText = info.fields.reference;
        nameWholeL.append(nameReferenceL);

        var nameArchetypeL = document.createElement("p");
        nameArchetypeL.classList.add("archetypename");
        nameArchetypeL.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeL.append(nameArchetypeL);

        var nameSubarchetypeL = document.createElement("p");
        nameSubarchetypeL.classList.add("subarchetypename");
        nameSubarchetypeL.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeL.append(nameSubarchetypeL);
 

})

}

/* M */


base('m').select({}).eachPage(gotPageOfInfosM, gotAllInfosM);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosm = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosM (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosm.push(...records);
    fetchNextPage();
}

function gotAllInfosM (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosM();
showInfosM();
}


function consoleLogInfosM() {
    console.log("consoleLogInfosM()");
    infosm.forEach((info) => {
    console.log("InfoM:", info);
});
}

/* -- showing data in container --*/

function showInfosM() {
  console.log("showInfosM()");
  infosm.forEach((info) => {

        //showing names

        var nameWholeM = document.createElement("li");
        nameWholeM.classList.add("titlenamem");
        document.querySelector(".m-class").append(nameWholeM);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamem').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.m-class');

        var nameTitleM = document.createElement("a");
        nameTitleM.classList.add("charactername");
        nameTitleM.innerText = info.fields.title;
        nameTitleM.href = info.fields.source;
        nameWholeM.append(nameTitleM);

        var nameReferenceM = document.createElement("i");
        nameReferenceM.classList.add("referencename");
        nameReferenceM.innerText = info.fields.reference;
        nameWholeM.append(nameReferenceM);

        var nameArchetypeM = document.createElement("p");
        nameArchetypeM.classList.add("archetypename");
        nameArchetypeM.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeM.append(nameArchetypeM);

        var nameSubarchetypeM = document.createElement("p");
        nameSubarchetypeM.classList.add("subarchetypename");
        nameSubarchetypeM.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeM.append(nameSubarchetypeM);
 

})

}

/* n */


base('n').select({}).eachPage(gotPageOfInfosN, gotAllInfosN);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosn = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosN (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosn.push(...records);
    fetchNextPage();
}

function gotAllInfosN (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosN();
showInfosN();
}


function consoleLogInfosN() {
    console.log("consoleLogInfosN()");
    infosn.forEach((info) => {
    console.log("InfoN:", info);
});
}

/* -- showing data in container --*/

function showInfosN() {
  console.log("showInfosN()");
  infosn.forEach((info) => {

        //showing names

        var nameWholeN = document.createElement("li");
        nameWholeN.classList.add("titlenamen");
        document.querySelector(".n-class").append(nameWholeN);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamen').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.n-class');

        var nameTitleN = document.createElement("a");
        nameTitleN.classList.add("charactername");
        nameTitleN.innerText = info.fields.title;
        nameTitleN.href = info.fields.source;
        nameWholeN.append(nameTitleN);

        var nameReferenceN = document.createElement("i");
        nameReferenceN.classList.add("referencename");
        nameReferenceN.innerText = info.fields.reference;
        nameWholeN.append(nameReferenceN);

        var nameArchetypeN = document.createElement("p");
        nameArchetypeN.classList.add("archetypename");
        nameArchetypeN.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeN.append(nameArchetypeN);

        var nameSubarchetypeN = document.createElement("p");
        nameSubarchetypeN.classList.add("subarchetypename");
        nameSubarchetypeN.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeN.append(nameSubarchetypeN);
 

})

}

/* O */


base('o').select({}).eachPage(gotPageOfInfosO, gotAllInfosO);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infoso = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosO (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infoso.push(...records);
    fetchNextPage();
}

function gotAllInfosO (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosO();
showInfosO();
}


function consoleLogInfosO() {
    console.log("consoleLogInfosO()");
    infoso.forEach((info) => {
    console.log("InfoO:", info);
});
}

/* -- showing data in container --*/

function showInfosO() {
  console.log("showInfosO()");
  infoso.forEach((info) => {

        //showing names

        var nameWholeO = document.createElement("li");
        nameWholeO.classList.add("titlenameo");
        document.querySelector(".o-class").append(nameWholeO);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenameo').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.o-class');

        var nameTitleO = document.createElement("a");
        nameTitleO.classList.add("charactername");
        nameTitleO.innerText = info.fields.title;
        nameTitleO.href = info.fields.source;
        nameWholeO.append(nameTitleO);

        var nameReferenceO = document.createElement("i");
        nameReferenceO.classList.add("referencename");
        nameReferenceO.innerText = info.fields.reference;
        nameWholeO.append(nameReferenceO);

        var nameArchetypeO = document.createElement("p");
        nameArchetypeO.classList.add("archetypename");
        nameArchetypeO.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeO.append(nameArchetypeO);

        var nameSubarchetypeO = document.createElement("p");
        nameSubarchetypeO.classList.add("subarchetypename");
        nameSubarchetypeO.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeO.append(nameSubarchetypeO);
 

})

}

/* P */


base('p').select({}).eachPage(gotPageOfInfosP, gotAllInfosP);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosp = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosP (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosp.push(...records);
    fetchNextPage();
}

function gotAllInfosP (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosP();
showInfosP();
}


function consoleLogInfosP() {
    console.log("consoleLogInfosP()");
    infosp.forEach((info) => {
    console.log("InfoP:", info);
});
}

/* -- showing data in container --*/

function showInfosP() {
  console.log("showInfosP()");
  infosp.forEach((info) => {

        //showing names

        var nameWholeP = document.createElement("li");
        nameWholeP.classList.add("titlenamep");
        document.querySelector(".p-class").append(nameWholeP);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamep').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.p-class');

        var nameTitleP = document.createElement("a");
        nameTitleP.classList.add("charactername");
        nameTitleP.innerText = info.fields.title;
        nameTitleP.href = info.fields.source;
        nameWholeP.append(nameTitleP);

        var nameReferenceP = document.createElement("i");
        nameReferenceP.classList.add("referencename");
        nameReferenceP.innerText = info.fields.reference;
        nameWholeP.append(nameReferenceP);

        var nameArchetypeP = document.createElement("p");
        nameArchetypeP.classList.add("archetypename");
        nameArchetypeP.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeP.append(nameArchetypeP);

        var nameSubarchetypeP = document.createElement("p");
        nameSubarchetypeP.classList.add("subarchetypename");
        nameSubarchetypeP.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeP.append(nameSubarchetypeP);
 

})

}


/* Q */


base('q').select({}).eachPage(gotPageOfInfosQ, gotAllInfosQ);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosq = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosQ (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosq.push(...records);
    fetchNextPage();
}

function gotAllInfosQ (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosQ();
showInfosQ();
}


function consoleLogInfosQ() {
    console.log("consoleLogInfosQ()");
    infosq.forEach((info) => {
    console.log("InfoQ:", info);
});
}

/* -- showing data in container --*/

function showInfosQ() {
  console.log("showInfosQ()");
  infosq.forEach((info) => {

        //showing names

        var nameWholeQ = document.createElement("li");
        nameWholeQ.classList.add("titlenameq");
        document.querySelector(".q-class").append(nameWholeQ);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenameq').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.q-class');

        var nameTitleQ = document.createElement("a");
        nameTitleQ.classList.add("charactername");
        nameTitleQ.innerText = info.fields.title;
        nameTitleQ.href = info.fields.source;
        nameWholeQ.append(nameTitleQ);

        var nameReferenceQ = document.createElement("i");
        nameReferenceQ.classList.add("referencename");
        nameReferenceQ.innerText = info.fields.reference;
        nameWholeQ.append(nameReferenceQ);

        var nameArchetypeQ = document.createElement("p");
        nameArchetypeQ.classList.add("archetypename");
        nameArchetypeQ.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeQ.append(nameArchetypeQ);

        var nameSubarchetypeQ = document.createElement("p");
        nameSubarchetypeQ.classList.add("subarchetypename");
        nameSubarchetypeQ.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeQ.append(nameSubarchetypeQ);
 

})

}


/* R */


base('r').select({}).eachPage(gotPageOfInfosR, gotAllInfosR);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosr = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosR (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosr.push(...records);
    fetchNextPage();
}

function gotAllInfosR (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosR();
showInfosR();
}


function consoleLogInfosR() {
    console.log("consoleLogInfosR()");
    infosr.forEach((info) => {
    console.log("InfoR:", info);
});
}

/* -- showing data in container --*/

function showInfosR() {
  console.log("showInfosR()");
  infosr.forEach((info) => {

        //showing names

        var nameWholeR = document.createElement("li");
        nameWholeR.classList.add("titlenamer");
        document.querySelector(".r-class").append(nameWholeR);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamer').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.r-class');

        var nameTitleR = document.createElement("a");
        nameTitleR.classList.add("charactername");
        nameTitleR.innerText = info.fields.title;
        nameTitleR.href = info.fields.source;
        nameWholeR.append(nameTitleR);

        var nameReferenceR = document.createElement("i");
        nameReferenceR.classList.add("referencename");
        nameReferenceR.innerText = info.fields.reference;
        nameWholeR.append(nameReferenceR);

        var nameArchetypeR = document.createElement("p");
        nameArchetypeR.classList.add("archetypename");
        nameArchetypeR.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeR.append(nameArchetypeR);

        var nameSubarchetypeR = document.createElement("p");
        nameSubarchetypeR.classList.add("subarchetypename");
        nameSubarchetypeR.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeR.append(nameSubarchetypeR);
 

})

}


/* S */


base('s').select({}).eachPage(gotPageOfInfosS, gotAllInfosS);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infoss = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosS (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infoss.push(...records);
    fetchNextPage();
}

function gotAllInfosS (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosS();
showInfosS();
}


function consoleLogInfosS() {
    console.log("consoleLogInfosS()");
    infoss.forEach((info) => {
    console.log("InfoS:", info);
});
}

/* -- showing data in container --*/

function showInfosS() {
  console.log("showInfosS()");
  infoss.forEach((info) => {

        //showing names

        var nameWholeS = document.createElement("li");
        nameWholeS.classList.add("titlenames");
        document.querySelector(".s-class").append(nameWholeS);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenames').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.s-class');

        var nameTitleS = document.createElement("a");
        nameTitleS.classList.add("charactername");
        nameTitleS.innerText = info.fields.title;
        nameTitleS.href = info.fields.source;
        nameWholeS.append(nameTitleS);

        var nameReferenceS = document.createElement("i");
        nameReferenceS.classList.add("referencename");
        nameReferenceS.innerText = info.fields.reference;
        nameWholeS.append(nameReferenceS);

        var nameArchetypeS = document.createElement("p");
        nameArchetypeS.classList.add("archetypename");
        nameArchetypeS.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeS.append(nameArchetypeS);

        var nameSubarchetypeS = document.createElement("p");
        nameSubarchetypeS.classList.add("subarchetypename");
        nameSubarchetypeS.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeS.append(nameSubarchetypeS);
 

})

}

/* T */


base('t').select({}).eachPage(gotPageOfInfosT, gotAllInfosT);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infost = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosT (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infost.push(...records);
    fetchNextPage();
}

function gotAllInfosT (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosT();
showInfosT();
}


function consoleLogInfosT() {
    console.log("consoleLogInfosT()");
    infost.forEach((info) => {
    console.log("InfoT:", info);
});
}

/* -- showing data in container --*/

function showInfosT() {
  console.log("showInfosT()");
  infost.forEach((info) => {

        //showing names

        var nameWholeT = document.createElement("li");
        nameWholeT.classList.add("titlenamet");
        document.querySelector(".t-class").append(nameWholeT);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamet').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.t-class');

        var nameTitleT = document.createElement("a");
        nameTitleT.classList.add("charactername");
        nameTitleT.innerText = info.fields.title;
        nameTitleT.href = info.fields.source;
        nameWholeT.append(nameTitleT);

        var nameReferenceT = document.createElement("i");
        nameReferenceT.classList.add("referencename");
        nameReferenceT.innerText = info.fields.reference;
        nameWholeT.append(nameReferenceT);

        var nameArchetypeT = document.createElement("p");
        nameArchetypeT.classList.add("archetypename");
        nameArchetypeT.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeT.append(nameArchetypeT);

        var nameSubarchetypeT = document.createElement("p");
        nameSubarchetypeT.classList.add("subarchetypename");
        nameSubarchetypeT.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeT.append(nameSubarchetypeT);
 

})

}


/* U */


base('u').select({}).eachPage(gotPageOfInfosU, gotAllInfosU);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosu = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosU (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosu.push(...records);
    fetchNextPage();
}

function gotAllInfosU (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosU();
showInfosU();
}


function consoleLogInfosU() {
    console.log("consoleLogInfosU()");
    infosu.forEach((info) => {
    console.log("InfoU:", info);
});
}

/* -- showing data in container --*/

function showInfosU() {
  console.log("showInfosU()");
  infosu.forEach((info) => {

        //showing names

        var nameWholeU = document.createElement("li");
        nameWholeU.classList.add("titlenameu");
        document.querySelector(".u-class").append(nameWholeU);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenameu').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.u-class');

        var nameTitleU = document.createElement("a");
        nameTitleU.classList.add("charactername");
        nameTitleU.innerText = info.fields.title;
        nameTitleU.href = info.fields.source;
        nameWholeU.append(nameTitleU);

        var nameReferenceU = document.createElement("i");
        nameReferenceU.classList.add("referencename");
        nameReferenceU.innerText = info.fields.reference;
        nameWholeU.append(nameReferenceU);

        var nameArchetypeU = document.createElement("p");
        nameArchetypeU.classList.add("archetypename");
        nameArchetypeU.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeU.append(nameArchetypeU);

        var nameSubarchetypeU = document.createElement("p");
        nameSubarchetypeU.classList.add("subarchetypename");
        nameSubarchetypeU.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeU.append(nameSubarchetypeU);
 

})

}

/* V */


base('v').select({}).eachPage(gotPageOfInfosV, gotAllInfosV);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosv = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosV (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosv.push(...records);
    fetchNextPage();
}

function gotAllInfosV (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosV();
showInfosV();
}


function consoleLogInfosV() {
    console.log("consoleLogInfosV()");
    infosv.forEach((info) => {
    console.log("InfoV:", info);
});
}

/* -- showing data in container --*/

function showInfosV() {
  console.log("showInfosV()");
  infosv.forEach((info) => {

        //showing names

        var nameWholeV = document.createElement("li");
        nameWholeV.classList.add("titlenamev");
        document.querySelector(".v-class").append(nameWholeV);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamev').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.v-class');

        var nameTitleV = document.createElement("a");
        nameTitleV.classList.add("charactername");
        nameTitleV.innerText = info.fields.title;
        nameTitleV.href = info.fields.source;
        nameWholeV.append(nameTitleV);

        var nameReferenceV = document.createElement("i");
        nameReferenceV.classList.add("referencename");
        nameReferenceV.innerText = info.fields.reference;
        nameWholeV.append(nameReferenceV);

        var nameArchetypeV = document.createElement("p");
        nameArchetypeV.classList.add("archetypename");
        nameArchetypeV.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeV.append(nameArchetypeV);

        var nameSubarchetypeV = document.createElement("p");
        nameSubarchetypeV.classList.add("subarchetypename");
        nameSubarchetypeV.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeV.append(nameSubarchetypeV);
 

})

}

/* W */


base('w').select({}).eachPage(gotPageOfInfosW, gotAllInfosW);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosw = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosW (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosw.push(...records);
    fetchNextPage();
}

function gotAllInfosW (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosW();
showInfosW();
}


function consoleLogInfosW() {
    console.log("consoleLogInfosW()");
    infosw.forEach((info) => {
    console.log("InfoW:", info);
});
}

/* -- showing data in container --*/

function showInfosW() {
  console.log("showInfosW()");
  infosw.forEach((info) => {

        //showing names

        var nameWholeW = document.createElement("li");
        nameWholeW.classList.add("titlenamew");
        document.querySelector(".w-class").append(nameWholeW);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamew').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.w-class');

        var nameTitleW = document.createElement("a");
        nameTitleW.classList.add("charactername");
        nameTitleW.innerText = info.fields.title;
        nameTitleW.href = info.fields.source;
        nameWholeW.append(nameTitleW);

        var nameReferenceW = document.createElement("i");
        nameReferenceW.classList.add("referencename");
        nameReferenceW.innerText = info.fields.reference;
        nameWholeW.append(nameReferenceW);

        var nameArchetypeW = document.createElement("p");
        nameArchetypeW.classList.add("archetypename");
        nameArchetypeW.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeW.append(nameArchetypeW);

        var nameSubarchetypeW = document.createElement("p");
        nameSubarchetypeW.classList.add("subarchetypename");
        nameSubarchetypeW.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeW.append(nameSubarchetypeW);
 

})

}


/* X */


base('x').select({}).eachPage(gotPageOfInfosX, gotAllInfosX);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosx = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosX (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosx.push(...records);
    fetchNextPage();
}

function gotAllInfosX (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosX();
showInfosX();
}


function consoleLogInfosX() {
    console.log("consoleLogInfosX()");
    infosx.forEach((info) => {
    console.log("InfoX:", info);
});
}

/* -- showing data in container --*/

function showInfosX() {
  console.log("showInfosX()");
  infosx.forEach((info) => {

        //showing names

        var nameWholeX = document.createElement("li");
        nameWholeX.classList.add("titlenamex");
        document.querySelector(".x-class").append(nameWholeX);

       //sorts array into alphabetical order
        $('.titlenamex').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.x-class');

        var nameTitleX = document.createElement("a");
        nameTitleX.classList.add("charactername");
        nameTitleX.innerText = info.fields.title;
        nameTitleX.href = info.fields.source;
        nameWholeX.append(nameTitleX);

        var nameReferenceX = document.createElement("i");
        nameReferenceX.classList.add("referencename");
        nameReferenceX.innerText = info.fields.reference;
        nameWholeX.append(nameReferenceX);

        var nameArchetypeX = document.createElement("p");
        nameArchetypeX.classList.add("archetypename");
        nameArchetypeX.innerText = info.fields.archetype;
        nameWholeX.append(nameArchetypeX);

        var nameSubarchetypeX = document.createElement("p");
        nameSubarchetypeX.classList.add("subarchetypename");
        nameSubarchetypeX.innerText = info.fields.subarchetype;
        nameWholeX.append(nameSubarchetypeX);
 

})

}


/* Y */


base('y').select({}).eachPage(gotPageOfInfosY, gotAllInfosY);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosy = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosY (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosy.push(...records);
    fetchNextPage();
}

function gotAllInfosY (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosY();
showInfosY();
}


function consoleLogInfosY() {
    console.log("consoleLogInfosY()");
    infosy.forEach((info) => {
    console.log("InfoY:", info);
});
}

/* -- showing data in container --*/

function showInfosY() {
  console.log("showInfosY()");
  infosy.forEach((info) => {

        //showing names

        var nameWholeY = document.createElement("li");
        nameWholeY.classList.add("titlenamey");
        document.querySelector(".y-class").append(nameWholeY);

       //sorts array into alphabetical order
        $('.titlenamey').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.y-class');

        var nameTitleY = document.createElement("a");
        nameTitleY.classList.add("charactername");
        nameTitleY.innerText = info.fields.title;
        nameTitleY.href = info.fields.source;
        nameWholeY.append(nameTitleY);

        var nameReferenceY = document.createElement("i");
        nameReferenceY.classList.add("referencename");
        nameReferenceY.innerText = info.fields.reference;
        nameWholeY.append(nameReferenceY);

        var nameArchetypeY = document.createElement("p");
        nameArchetypeY.classList.add("archetypename");
        nameArchetypeY.innerText = info.fields.archetype;
        nameWholeY.append(nameArchetypeY);

        var nameSubarchetypeY = document.createElement("p");
        nameSubarchetypeY.classList.add("subarchetypename");
        nameSubarchetypeY.innerText = info.fields.subarchetype;
        nameWholeY.append(nameSubarchetypeY);
 

})

}


/* Z */


base('z').select({}).eachPage(gotPageOfInfosZ, gotAllInfosZ);
    // This function (`page`) will get called for each page of records.

    /*-- show data in table --*/


const infosz = []; //array from airtable data//

/* -- showing records in console--*/

function gotPageOfInfosZ (records, fetchNextPage) {
    console.log("gotPageOfInfo()");
    infosz.push(...records);
    fetchNextPage();
}

function gotAllInfosZ (err) {
    console.log("gotAllInfo()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogInfosZ();
showInfosZ();
}


function consoleLogInfosZ() {
    console.log("consoleLogInfosZ()");
    infosz.forEach((info) => {
    console.log("InfoZ:", info);
});
}

/* -- showing data in container --*/

function showInfosZ() {
  console.log("showInfosZ()");
  infosz.forEach((info) => {

        //showing names

        var nameWholeZ = document.createElement("li");
        nameWholeZ.classList.add("titlenamez");
        document.querySelector(".z-class").append(nameWholeZ);

        
        /*var nameTitle = document.createElement("li");
        nameTitle.classList.add("titlename");
        nameTitle.innerText = info.fields.title;
        document.querySelector("#a-class").append(nameTitle);*/

       //sorts array into alphabetical order
        $('.titlenamez').sort(function(a, b) {
          if (a.textContent < b.textContent) {
            return -1;
          } else {
            return 1;
          }
        }).appendTo('.z-class');

        var nameTitleZ = document.createElement("a");
        nameTitleZ.classList.add("charactername");
        nameTitleZ.innerText = info.fields.title;
        nameTitleZ.href = info.fields.source;
        nameWholeZ.append(nameTitleZ);

        var nameReferenceZ = document.createElement("i");
        nameReferenceZ.classList.add("referencename");
        nameReferenceZ.innerText = info.fields.reference;
        nameWholeZ.append(nameReferenceZ);

        var nameArchetypeZ = document.createElement("p");
        nameArchetypeZ.classList.add("archetypename");
        nameArchetypeZ.innerText = info.fields.archetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeZ.append(nameArchetypeZ);

        var nameSubarchetypeZ = document.createElement("p");
        nameSubarchetypeZ.classList.add("subarchetypename");
        nameSubarchetypeZ.innerText = info.fields.subarchetype;
        /*document.querySelector("#a-class").append(nameTitle);*/
        nameWholeZ.append(nameSubarchetypeZ);
 

})

}

















