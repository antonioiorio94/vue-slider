console.log("JS OK");

//avvio di Vue sull'id app

const app = new Vue({
  el: "#app",
  data: {
    slides,
    //assegno manualmente una proprietà all'indice dell'array
    activeSlideIndex: 2,
  },
});
