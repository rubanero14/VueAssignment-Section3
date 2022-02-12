const app = Vue.createApp({
    data() {
        return{
            inputTaskValue: '',
            tasks: [],
            isVisible: true,
            toggleStatus: 'Hide'
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.inputTaskValue);
        },
        toggleVisibility(){
            if(this.isVisible === false){
                this.isVisible = !this.isVisible;
                return this.toggleStatus = 'Hide'
            } else {
                this.isVisible = !this.isVisible;
                return this.toggleStatus = 'Show'
            }
        }
    },
});

app.mount('#assignment');

// const app = Vue.createApp({
//     data() {
//       return { 
//         goals: [],
//         enteredGoalValue: '',
//       };
//     },
//     methods: {
//       addGoal() {
//         this.goals.push(this.enteredGoalValue);
//       },
//       removeGoal(index){
//         this.goals.splice(index, 1);
//       }
//     },
//     computed: {
  
//     },
//     watch:{
  
//     }
//   });
  
//   app.mount('#user-goals');