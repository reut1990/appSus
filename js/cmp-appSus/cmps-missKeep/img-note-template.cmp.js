

export default {
    props: ['note'],
   template: `
    <section  v-on:click="edit" class="imgNote-template" :style="style">
       <div class="img-container" :style="bgImg"></div>
       <h5>{{this.note.title}}</h5>
       <p>{{this.note.txt}}</p>
   </section> 
  `,
  data(){
      return{
      bgImg:{},
      style:{},
      }
  },
  created(){
    this.bgImg = {'background-image': `url('${this.note.imgUrl}')`};
    this.style = this.note.style;

  },
  methods:
  {
    edit(){
      console.log('note clicked');
      this.$emit('editNote', this.note);
    }
  },
}