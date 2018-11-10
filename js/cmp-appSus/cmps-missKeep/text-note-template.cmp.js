export default {
    props: ['note'],
   template: `
   <section v-bind:style="style" class="template-preview-txtNote">
    <h5>{{note.title}}</h5>
    <p>{{note.txt}}</p>  
   </section>
 

  `,
  data(){
    return{
      style:this.note.style,
    }
  }
}