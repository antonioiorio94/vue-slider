console.log("JS OK");

//avvio di Vue sull'id app

const app = new Vue({
  el: "#app",
  data: {
    slides,
    //assegno manualmente una proprietà all'indice dell'array
    activeSlideIndex: 0,
  },

  methods: {
    //aggiunta di una funzione che si attiva al click del div"prev/next" e aumente il numero dell'indice di 1
    showPrevThumb() {
      if (this.activeSlideIndex > 0) {
        this.activeSlideIndex--;
      }
    },
    showNextThumb() {
      if (this.activeSlideIndex < slides.length - 1) {
        this.activeSlideIndex++;
      }
    },
    checkActive(item) {
      const index = this.slides.findIndex(
        (slide) => slide.title === item.title
      );
      return index === this.activeSlideIndex ? "thumb active" : "thumb";
    },
    //1- al click su una thumb, visualizzare in grande l'immagine corrispondente

    showOnClick(item) {
      const indexImgClicked = this.slides.findIndex(
        (slide) => slide.title === item.title
      );
      console.log(indexImgClicked);
      this.activeSlideIndex = indexImgClicked;
    },
  },
});
