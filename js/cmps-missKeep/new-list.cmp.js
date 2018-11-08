



import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import { missKeepService } from '../services-missKeep/service-missKeep.js';
import {utilService} from '../services-missKeep/utils.js'

export default {

   template: `
    <section class="new-list-note">
              	
	   <div class="toDo-container" id="todo">
			<section class="input-task-container">	
				<button id="mark-all" @click="selectAll" :checked="areAllSelected">select All</button>
				<input v-model="newTask" @keyup.enter="addTask" placeholder="Type your task..." autofocus class="text-input">
				<button @click="clearList">Clear List</button>
			</section>
			<section class="list">
				<ul class="list-item">
					<li v-for="task in tasks" :class="{done: isChecked(task)}">
						<input type="checkbox" class="checkbox" @click="check" v-model="task.checked">
						<input type="text" v-if="task === editingTask" v-auto-focus class="text-input" @keyup.enter="finishEditing(task)" @blur="endEditing(task)" v-model="task.text">
     					<label for="checkbox" v-if="task !== editingTask" @dblclick="editTask(task)">{{ task.text }}</label>
						<button class="delete" @click="removeTask(task)">X</button>
					</li>
				</ul>
			</section>
    	</div>
        <div class="buttons"><button type="button" v-on:click="close">Close</button> 
        <button  @click="addNote" type="button" >Add note</button>   </div> 
       
    </section>
    `,
    data() {
        return {
            newTask: null,
            tasks: [ ],
           editingTask: {   },
        }
    },

    methods: {
        addNote(){
            let note={
                type:'list',
                id:utilService.makeId(),
                tasks:this.tasks,
            }
            missKeepService.addNote(note);
        },
        close(){
            eventBus.$emit(CLOSE_COMPONENT);
           },
           addTask: function () {
            var task = this.newTask.trim();
            if (task) {
                this.tasks.push({text: task, checked: false});
                this.newTask = null;
            }
        },
        removeTask: function (task) {
           var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        },
        editTask: function (task) {
            this.editingTask = task;
        },
        finishEditing: function (task) {
            this.editingTask = {};
            if (task.text.trim() === ""){
                this.removeTask(task);
            }
        },
        clearList: function () {
            this.tasks = [ ];
        },
        selectAll: function () {
            var isAllSelected = this.areAllSelected ? false : true;
            for (var i = 0; i < this.tasks.length; i++) {
                this.tasks[i].checked = isAllSelected;
            }
        },
        check: function (task) {
            task.checked = true;
        },
        isChecked: function (task) {
            return task.checked;
        },
      
    },
    computed: {
     areAllSelected: function () {
        return this.tasks.every(function(task) {
            return task.checked;
        }) &&  this.tasks.length > 0;
    },
       
    },
    components: {

        missKeepService,
        utilService
    }
}




