



import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'


export default {

   template: `
    <section class="new-list-note">
              	
	   <div class="toDo-container" id="todo">
			<section class="panel">	
				<input type="checkbox" id="mark-all" @click="selectAll" :checked="areAllSelected">
				<input v-model="newTask" @keyup.enter="addTask" placeholder="What do you need to do?" autofocus class="text-input">
				<button @click="clearList">Clear List</button>
			</section>
			<section class="list">
				<ul class="list-item">
					<li v-for="task in tasks" :class="{done: isChecked(task)}">
						<input type="checkbox" class="checkbox" @click="check" v-model="task.checked">
						<input type="text" v-if="task === editingTask" v-auto-focus class="text-input" @keyup.enter="endEditing(task)" @blur="endEditing(task)" v-model="task.text">
     					<label for="checkbox" v-if="task !== editingTask" @dblclick="editTask(task)">{{ task.text }}</label>
						<button class="delete" @click="removeTask(task)">X</button>
					</li>
				</ul>
			</section>
    	</div>
        <button type="button" v-on:click="close">Close</button>     
       
    </section>
    `,
    data() {
        return {
           newTask: "",
            tasks: [
                 {
                    text: " ",
                    checked: false
                }
            ],
           editingTask: {   },
        }
    },

    methods: {
        close(){
            eventBus.$emit(CLOSE_COMPONENT);
           },
           addTask: function () {
            var task = this.newTask.trim();
            if (task) {
                this.tasks.push({text: task, checked: false});
                this.newTask = "";
            }
        },
        removeTask: function (task) {
           var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        },
    
        editTask: function (task) {
            this.editingTask = task;
        },
        endEditing: function (task) {
            this.editingTask = {};
            if (task.text.trim() === ""){
                this.removeTask(task);
            }
            
        },
        clearList: function () {
            this.tasks = [ ];
        },
        selectAll: function (task) {
            var targetValue = this.areAllSelected ? false : true;
            for (var i = 0; i < this.tasks.length; i++) {
                this.tasks[i].checked = targetValue;
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
    }
}




