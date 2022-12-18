function insertFiche(){
          let fiche =[];
         

            tel = document.getElementById("tel").value;
            conseiller = document.getElementById("conseiller").value;
            equipe = document.getElementById("equipe").value;
            cq = document.getElementById("cq").value;
            caractech = document.getElementById("caractech").value;
            caracperso = document.getElementById("caracperso").value;
            valorisation = document.getElementById("valorisation").value;
            rappel = document.getElementById("rappel").value;
            type = document.getElementById("type").value;
            date = document.getElementById("date").value;
            commentaire = document.getElementById("comment").value;

            let string = (tel +' '+conseiller+' '+equipe+' '+cq+' '+caractech+' '+caracperso+' '+valorisation+' '+rappel+' '+type+' '+date+' '+commentaire)


       fiche = string.split(" ")


consttant = ['num Tél', 'conseiller', 'cquipe', 'cq', 'caractech', 'caracperso', 'valorisation', 'rappel', 'type', 'date', 'commentaire']

let item={};
  
for(var i=0; i<fiche.length; i++){

  item[consttant[i]] = fiche[i];



};


console.log(item)

allFiche = []


allFiche.push(item, window.localStorage.getItem("allFiche"))



window.localStorage.setItem("allFiche", JSON.stringify(allFiche));
}

allFiche = window.localStorage.getItem("allFiche");
console.log(JSON.parse(allFiche));


let btn = document.getElementById("btn");
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


allFiche = window.localStorage.getItem("allFiche");

function etatfiche(allfiche) {


keys = document.getElementById('tel2').value;

  return filter (allfiche, (object, key) => object['num Tél'] == keys)
}

let etatfinal = etatfiche(allFiche);

for(let key in etatfinal){
document.getElementById('tb').innerHTML += etatfinal[key] + '<tr>';
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener('click', event => {
      etatfiche(allFiche);

    });


   



