<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Criar Nova Tarefa
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="createTask">
                    <div class="form-group">
                      <label for="task_note">Tarefa:</label>
                      <input type="text"
                        class="form-control" name="task_note" id="task_note" v-model="task.task_note" aria-describedby="helpId" placeholder="Descrição da Tarefa">
                      <small id="helpId" class="form-text text-muted">Descreva sua tarafa</small>
                    </div>

                    <div class="form-group">
                      <label for="task_priority">Prioridade:</label>
                      <input type="text"
                        class="form-control" name="task_priority" id="task_priority" v-model="task.task_priority" aria-describedby="helpId" placeholder="Prioridade">
                      <small id="helpId" class="form-text text-muted">Defina a prioridade</small>
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Incluir</button>
                        <button type="button" class="btn btn-warning">Cancelar</button>                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            task:[]
        }
    },
    methods:{
        createTask(){
           // console.log(this.task);

            var taskData = {                
                task_list_id_fk:"1",
                task_note:this.task.task_note,
                task_priority:this.task.task_priority
            }

            //console.log(JSON.stringify(taskData))
            //note: .then (Promise)

            fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/task`,{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(taskData)
            })
            .then(response=>response.json())
            .then((responseData=>{
                console.log(responseData);
                window.location.href='read';
            }))
        }
    }
}
</script>