

export default {
    props: ['note'],
   template: `
    <section class="imgNote-template" :style="style">
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

  }
}