// Steps:
// 1. avere un elenco di task da fare o fatti
// 2. stamparli in pagina
// 3. al click del task fare il toggle del task fatto o meno
// 4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
// 5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
// 6. verificare la lunghezza minima del nuovo task
// 7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”
// BONUS
// - Verificare se il task è già presente e nel caso mostrare l’errore


const { createApp } = Vue;

createApp({
  data(){
    return {
      tasks: [
        {
          text: 'Prendere la pappa di Artù',
          done: false
        },
        {
          text: 'Studiare Vue',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ],
      logoImg: './img/logo.png',
      errorMsg: '',
      newTask: '',
    }
  },
  methods: {
    deleteTask(index) {
      this.errorMsg = '';
      if(this.tasks[index].done) {
        this.tasks.splice(index, 1)
      } else {
        this.errorMsg = 'Pls. do your homework first before deleting this...'
      }
    },
    addNewTask(){
      // controllare se newTask.length >= 5
      // creare un oggetto task
      // il text del task = newTask e done false
      // pushare l'oggetto in testa all'array task
      if(this.newTask.length < 5) {
        this.errorMsg = 'Attention! you must write at least five characters';
      } else {
        const newToDo = {
          text: this.newTask,
          done: false
        }
        this.tasks.unshift(newToDo);
        this.newTask = '';
      }
    }
  }

}).mount('#app');