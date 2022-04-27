import { createStore } from "vuex";

const mutations = {
  updateSource(state, source) {
    state.imageSource = source;
  }
};

const state = {
  imageSource:
    "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a"
};

export default createStore({ mutations, state, strict: true });
