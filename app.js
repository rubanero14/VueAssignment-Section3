const app = Vue.createApp({
    data() {
        return{
            inputTaskValue: '',
            tasks: [],
            isVisible: true,
            toggleStatus: 'Hide List'
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputTaskValue);
        },
        removeTask(index){
            this.tasks.splice(index, 1)
        },
        toggleVisibility(){
            if(this.isVisible === false){
                this.isVisible = !this.isVisible;
                return this.toggleStatus = 'Hide List'
            } else {
                this.isVisible = !this.isVisible;
                return this.toggleStatus = 'Show List'
            }
        }
    },
});

app.mount('#assignment');