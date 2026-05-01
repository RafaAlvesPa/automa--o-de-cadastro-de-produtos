// Função para calcular a pontuação dos itens avulsos
function calcular() {
   let qtdArroz = Number(document.getElementById("qtdArroz").value)
   let qtdFeijao = Number (document.getElementById("qtdFeijao").value)
   let qtdOleo = Number(document.getElementById("qtdOleo").value)
   let qtdMacarrao = Number(document.getElementById("qtdMacarrao").value)

   let pontosTotal = (qtdArroz * 10) + (qtdFeijao * 8) + (qtdMacarrao * 4) + (qtdOleo * 2)

   let cor =document.getElementById("cor").value
   let metakit 
   

   if (cor === "verde") {
      metakit = 61;
   
   }
   else if (cor === "vermelho") {
      metakit = 32;
   }
   else if (cor === "laranja") {
      metakit = 21;
   }
   let qtdKits = Number(document.getElementById("qtdKits").value)
   if (qtdKits == metakit) {
      pontosTotal = pontosTotal + 5000;
   }
   else if (qtdKits > metakit) {
      pontosTotal = pontosTotal + 5000 + (qtdKits - metakit) * (5000/metakit);
   }
     else if (qtdKits < metakit) {
      pontosTotal = pontosTotal +( qtdKits * (5000/metakit));
   }


   let metaSuplemento
   if (metakit % 2 == 0){
      metaSuplemento = metakit / 2;
   }
   else{
      metaSuplemento = (metakit / 2) + 0.5;
   }

   let qtdSuplemento = Number(document.getElementById("qtdSuplemento").value)
   if(qtdSuplemento == metaSuplemento){
      pontosTotal = pontosTotal + 5000;
   }
   else if ( qtdSuplemento > metaSuplemento) {
      pontosTotal = pontosTotal + 5000 +( (qtdSuplemento - metaSuplemento) * (5000/metaSuplemento));
   }
   else if ( qtdSuplemento < metaSuplemento) {
      pontosTotal = pontosTotal + (qtdSuplemento * (5000/metaSuplemento));
   }

   let metaLeite = metakit

   let qtdleite = Number(document.getElementById("qtdLeite").value)
   if( qtdleite == metaLeite){
      pontosTotal = pontosTotal + 5000;
   }
   else if ( qtdleite > metaLeite) {
      pontosTotal = pontosTotal + 5000 + ( (qtdleite - metaLeite) * (5000/metaLeite));
   }
   else if ( qtdleite < metaLeite) {
      pontosTotal = pontosTotal + (qtdleite * (5000/metaLeite));
   }

   let doacaoSangue
   if( metakit % 2 == 0){
      doacaoSangue = metakit / 2
   }
   else{
      doacaoSangue = (metaLeite / 2) + 0.5
   }


   let qtdDoacaoSangue = Number(document.getElementById("qtdDoacaoSangue").value)
   if (qtdDoacaoSangue == doacaoSangue) {
      pontosTotal = pontosTotal + 5000;
   }
   else if (qtdDoacaoSangue > doacaoSangue) {
      pontosTotal = pontosTotal + 5000 + ( (qtdDoacaoSangue - doacaoSangue) * (5000/doacaoSangue));
   }
   else if (qtdDoacaoSangue < doacaoSangue) {
      pontosTotal = pontosTotal + (qtdDoacaoSangue * (5000/doacaoSangue));
   }
  

   

   document.getElementById("result").innerText = "🎯Pontuação total: " + pontosTotal.toFixed(2)
  
}