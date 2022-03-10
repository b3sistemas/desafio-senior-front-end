<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
               Editar uma tarefa
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateTask">
                    <div class="form-group">
                      <label for="task_note">Tarefa:</label>
                      <input type="text"
                        class="form-control" required name="task_note" id="task_note" v-model="task.task_note" aria-describedby="helpId" placeholder="Descrição da Tarefa">
                      <small id="helpId" class="form-text text-muted">Descreva sua tarafa</small>
                    </div>

                    <div class="form-group">
                      <label for="task_priority">Prioridade:</label>
                      <input type="text"
                        class="form-control" required name="task_priority" id="task_priority" v-model="task.task_priority" aria-describedby="helpId" placeholder="Prioridade">
                      <small id="helpId" class="form-text text-muted">Defina a prioridade</small>
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Salvar</button>
                        <!-- <button type="button" class="btn btn-warning">Cancelar</button> -->
                        <router-link :to="{name:'Read'}" class="btn btn-warning">Cancelar</router-link>
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
    created:function(){
        this.getTaskIdData();
    },
    methods:{
        getTaskIdData(){

            console.log(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/task/` + this.$route.params.task_id)
           
           fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/task/` + this.$route.params.task_id,{
                method:"GET"
            })
            .then(response=>response.json())
            .then((dataSet)=>{
                //console.log(dataSet)
                console.log(dataSet.result)                

                this.task = [];
                
                if (dataSet.erro == ''){                                        
                    this.task = dataSet.result;        
                }
            })
            .catch(console.log)           
        },
        updateTask(){
          // console.log(this.task);

            var taskData = {                
                task_id:this.task.task_id,
                task_note:this.task.task_note,
                task_priority:this.task.task_priority
            }

            console.log(JSON.stringify(taskData))
            //note: .then (Promise)
            // /*
            
            fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/task`,{
                method:"PUT",                
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(taskData)
            })
            .then(response=>response.json())
            .then((responseData=>{
                console.log(responseData);
                window.location.href='read';
            }))   
           // */         
        }

    } 
}
</script>