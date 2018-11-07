

import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'


export default {
    // props: ['books'],
    template: `
    <section class="text-note">
        <form class="input-form">
            <div class="input-form-header">
               <input  type="text" placeholder="Title..." v-model="title"/>
               <img src="../../img/pin-icon.png">
            </div>
           <textarea id="txt-box" placeholder="Note Text..." v-model="txt"></textarea>
        </form>
        <div class="edit-text-note">
            <input type="color" id="html5colorpicker" onchange="clickColor(0, -1, -1, 5)" value="#ff0000" >
             <button type="button" v-on:click="close">Close</button>     
        </div>  
    </section>
    `,
    data() {
        return {
          title:'',
          txt:'',
        }
    },

    methods: {
        close(){
            eventBus.$emit(CLOSE_COMPONENT);
    
          },
        //    onTextTyping(){
        //      $("#txt-box").on('input', function() {
        //     var scroll_height = $("#txt-box").get(0).scrollHeight;
        
        //     $("#txt-box").css('height', scroll_height + 'px');
        // });
      },
    computed: {
     
       
    },
    components: {
    }
}



