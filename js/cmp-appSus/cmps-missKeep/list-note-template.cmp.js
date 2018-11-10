


export default {
    props: ['note'],
   template: `
      <section @click="edit" v-bind:style="style" class="template-preview-listNote">
           <h5>{{note.title}}</h5>
           <ul>
               <li v-for="task in note.tasks">-{{task.text}}</li>
            </ul>
       </section>
 

  `,
  
  data(){
    return{
      style:this.note.style,
    }
},
methods:
{
  edit(){
    console.log('note clicked');
    this.$emit('editNote', this.note);
  }
},
}

