var vm = new Vue({
	el:'#vue-App',
	data:{
		todoList: ['Add something in your list','What do you want to,right now,choose one','add some text'],
		newTask: '',
	},
	mounted() {
			  console.log('App mounted!');
			  if (localStorage.getItem('todoList')) this.todoList = JSON.parse(localStorage.getItem('todoList'));
			},
  watch: {
    todoList: {
      handler() { 
			  console.log('TodoList changed!');
			  localStorage.setItem('todoList',JSON.stringify(this.todoList));
			},
      deep: true,
    },
  },
});

