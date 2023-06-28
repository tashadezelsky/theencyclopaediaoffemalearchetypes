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

/*-- api alex v --*/



/*-- air table api school v--*/

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyHlLjNPepQaUXmp'}).base('appPIEihJz4R8rE05');

base('a').select({}).eachPage(gotPageOfInfos, gotAllInfos);
    // This function (`page`) will get called for each page of records.

const infos = [];

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

function showInfos () {
    console.log("showInfos()");
    infos.forEach((info) => {

        //var pictureTitle = document.createElement("h3");
        //pictureTitle.innerText = mermaid.fields.title;
        //document.body.append(pictureTitle);

        //new div where the container for the images will go
        var titleContainer = document.createElement("div");
        titleContainer.classList.add("titlecontainer");
        document.querySelector(".container").append(titleContainer);

        //window.addEventListener('scroll', function(){
           // if (document.body.scrollTop > 400){
             //   var currScrollPos2 = document.body.scrollTop;
               // document.getElementById('container').style.opacity = -currScrollPos2 / 400 + 2;
            //}
        //});

        var title0f = document.createElement("h1");
        title0f.classList.add("titleof");
        title0f.innerText = info.fields.title;
        titleContainer.append(title0f);

        /*-- let alphabet = [info.fields.title];

        /*-- let sortedArray = alphabet.sort();
        console.log(sortedArray); --*/

        /*--const stringArray = [info];
        stringArray.sort();
        stringArray.reverse();
        console.log(stringArray);


        /*-var name0f = document.createElement("h3");
        name0f.classList.add("nameof");
        name0f.innerText = name.fields.archetype;
        nameContainer.append(name0f);

        var name0f = document.createElement("h3");
        name0f.classList.add("nameof");
        name0f.innerText = name.fields.subarchetype;
        nameContainer.append(name0f);

        var name0f = document.createElement("p");
        name0f.classList.add("nameof");
        name0f.innerText = name.fields.time;
        nameContainer.append(name0f);

        var name0f = document.createElement("p");
        name0f.classList.add("nameof");
        name0f.innerText = name.fields.location;
        nameContainer.append(name0f);-*/

   })

    /*const titles = [info.fields.title];
    titles.sort(function(a, b){return b-a});--*/

    
    

 }; 
        
