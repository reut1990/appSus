// import { bookService } from '../services/book.service.js';
// import bookList from '../cmps/book-list.cmp.js';
import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import textNote from '../cmps-missKeep/text-note.cmp.js';
import newImg from '../cmps-missKeep/new-img.cmp.js';
import newList from '../cmps-missKeep/new-list.cmp.js';



Vue.component('miss-keep', {
    template: `
    <section class="miss-keep-app">
     
     <h1>Miss keep</h1>
      <div v-if="isShow" class="container">
          <form class="input-form">
              <input v-on:click="inputClicked('text-note')" ref="myInput" type="text" placeholder="type your note..." v-model="noteTxt">
          </form>
          <div class="tooltip" v-on:click="component='new-list'">
              <img class="new-list" src="../../img/newList.png" alt="new List">
              <span class="tooltiptext">New List</span>
          </div>
          <div class="tooltip" >
              <img  v-on:click="inputClicked('new-img')" class="new-list-img"src="../../img/newImage.png" alt="new Image">
              <span class="tooltiptext">New Note with Image Note</span>
          </div>
      </div>
       <keep-alive>
            <component v-if="!isShow"  v-bind:is="component"></component>
       </keep-alive>
    </section>
    `,
    data() {
        return {
            noteTxt: '',
            isShow: true,
            component: '',
        }
    },
    created() {
        eventBus.$on(CLOSE_COMPONENT, this.close)
    },
    methods: {
        // this.$refs.myInput.focus()
        inputClicked(componentName) {
            this.isShow = !this.isShow;
            this.component = componentName;

        },
        close() {
            this.isShow = true;
        }

    },

    computed: {

    },
    components: {
        'text-note': textNote,
        'new-img': newImg,
        'new-list':newList
    }
});