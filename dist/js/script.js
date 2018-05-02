document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#toDo',
        data: {
            todo: [
                {
                    message: 'Some todo',
                    status: true,
                    editor: false,
                    editedMessage: ''
                }
            ],
            message: ''
        },
        methods: {
            addTodo: function(){
                this.todo.push({message: this.message, status: true, editor: false});
                this.message = ''
                localStorage.setItem('todos', JSON.stringify(this.todo));
                
            },
            removeTodo: function(index){
                this.todo.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(this.todo));
            },
            checkTodo: function(index){
                this.todo[index].status = !this.todo[index].status;
                localStorage.setItem('todos', JSON.stringify(this.todo));
            },
            editMessage: function(index){
                this.todo[index].message = this.todo[index].editedMessage
                this.todo[index].editor = false
                this.todo[index].editedMessage = ''
                localStorage.setItem('todos', JSON.stringify(this.todo))
            }
        },
        created: function(){
            if(localStorage.getItem('todos') !== null){
                this.todo = JSON.parse(localStorage.getItem('todos'))
            }
        }
    })
});