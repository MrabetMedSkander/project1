function insertFiche(){
          let fiche =[];
         

            Tel = document.getElementById("Tel").value;
            conseiller = document.getElementById("conseiller").value;
            Equipe = document.getElementById("Equipe").value;
            CQ = document.getElementById("CQ").value;
            caracTech = document.getElementById("caracTech").value;
            caracPerso = document.getElementById("caracPerso").value;
            Valorisation = document.getElementById("Valorisation").value;
            Rappel = document.getElementById("Rappel").value;
            Type = document.getElementById("Type").value;
            Date = document.getElementById("Date").value;
            commentaire = document.getElementById("commentaire").value;

            let string = (Tel +' '+conseiller+' '+Equipe+' '+CQ+' '+caracTech+' '+caracPerso+' '+Valorisation+' '+Rappel+' '+Type+' '+Date+' '+commentaire)


       fiche = string.split(" ")


consttant = ['Num Tél', 'Conseiller', 'Equipe', 'CQ', 'caracTech', 'caracPerso', 'Valorisation', 'Rappel', 'Type', 'Date', 'Commentaire']

let item={};
  
for(var i=0; i<fiche.length; i++){

  item[consttant[i]] = fiche[i];



};

console.log(item);


}
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
      insertFiche();

 });




