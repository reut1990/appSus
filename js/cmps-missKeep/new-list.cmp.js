



import eventBus, { CLOSE_COMPONENT } from '../event-bus.js'
import { missKeepService } from '../services-missKeep/service-missKeep.js';
import { utilService } from '../services-missKeep/utils.js'

export default {
    props: ['note', 'isDisabled'],
    template: `
    <section class="new-list-note">
              	
	   <div class="toDo-container" id="todo" v-bind:style="style">
            <section class="input-task-container">	
				<button :disabled="isDisabled" id="mark-all" @click="selectAll" :checked="areAllSelected">select All</button>
				<input :disabled="isDisabled"  v-model="newTask" @keyup.enter="addTask" placeholder="Type your task..." autofocus class="text-input">
				<button :disabled="isDisabled"  @click="clearList">Clear List</button>
            </section> 
            <input  :disabled="isDisabled" type="color" id="html5colorpicker"  v-on:change="changeBackground" value="#ff0000" >
            <input  :disabled="isDisabled" class="title-list" v-bind:style="style" type="text" placeholder="Title..." v-model="title"/>
            <section class="list"  >
				<ul class="list-item">
					<li v-for="task in tasks" :class="{done: isChecked(task)}">
						<input  :disabled="isDisabled" type="checkbox" class="checkbox" @click="check" v-model="task.checked">
						<input  :disabled="isDisabled" type="text" v-if="task === editingTask" v-auto-focus class="text-input" @keyup.enter="finishEditing(task)" @blur="endEditing(task)" v-model="task.text">
     					<label for="checkbox" v-if="task !== editingTask" @dblclick="editTask(task)">{{ task.text }}</label>
						<button :disabled="isDisabled"  class="delete" @click="removeTask(task)">X</button>
					</li>
				</ul>
			</section>
    	</div>
        
       
    </section>
    `,
    created() {
        if (this.note) {
            this.title = this.note.title;
            this.tasks = this.note.tasks;
            this.style = this.note.style;
        }
    },
    data() {
        return {
            newTask: null,
            title: '',
            tasks: [],
            editingTask: {},
            style: {
                'background-color': '',
            },
        }
    },

    methods: {
        close() {
            eventBus.$emit(CLOSE_COMPONENT);
        },
        addTask: function () {
            var task = this.newTask.trim();
            if (task) {
                this.tasks.push({ text: task, checked: false });
                this.newTask = null;
            }
        },
        changeBackground() {
            this.style['background-color'] = event.target.value;
            console.log(this.style['background-color']);
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
            if (task.text.trim() === "") {
                this.removeTask(task);
            }
        },
        clearList: function () {
            this.tasks = [];
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
            return this.tasks.every(function (task) {
                return task.checked;
            }) && this.tasks.length > 0;
        },
    },

        fromData() {
            return {
                type: 'new-list',
                id: utilService.makeId(),
                title: this.title,
                tasks: this.tasks,
                style: this.style

            }
        },
        components: {

            missKeepService,
            utilService
        },
    }




