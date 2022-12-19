
var allFiche = window.localStorage.getItem("allFiche");
var ami =JSON.parse(allFiche);
console.log(typeof ami);
console.log(ami);

function insertFiche(){
          var fiche =[];
         

            tel = document.getElementById("tel").value;
            conseiller = document.getElementById("conseiller").value;
            equipe = document.getElementById("equipe").value;
            cq = document.getElementById("cq").value;
            caractech = document.getElementById("caractech").value;
            caracperso = document.getElementById("caracperso").value;
            valorisation = document.getElementById("valorisation").value;
            rappel = document.getElementById("rappel").value;
            date = document.getElementById("date").value;
            commentaire = document.getElementById("comment").value;

            var string = (tel +' '+conseiller+' '+equipe+' '+cq+' '+caractech+' '+caracperso+' '+valorisation+' '+rappel+' '+date+' '+commentaire)


       fiche = string.split(" ")


consttant = ['num Tél', 'conseiller', 'cquipe', 'cq', 'caractech', 'caracperso', 'valorisation', 'rappel', 'date', 'commentaire']

var item={};
  
for(var i=0; i<fiche.length; i++){

  item[consttant[i]] = fiche[i];
};

var allFiche = [];

allFiche.push(item, window.localStorage.getItem("allFiche"));

window.localStorage.setItem("allFiche", JSON.stringify(allFiche));
}

var btn = document.getElementById("btn");
btn.addEventListener('click', event => {
      insertFiche();

 });


$("#divetat").hide();
$("#etat").click(function(){
  $(".form").hide();
  $("#divetat").show();
}
) 

$("#con").click(function(){
  $(".form").show();
  $("#divetat").hide();
}
) 


function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}


function etatfiche(array) {
var keys = document.getElementById('tel2').value;
  return filter (array, (object, key) => object['num Tél'] == keys)
}

var etatfinal = etatfiche(ami);

var btn2 = document.getElementById("btn2");
btn2.addEventListener('click', event => {
      console.log(etatfinal);

    });



