<template>
    <div class="container">
        <router-link to="/create" class="btn btn-success">Adicionar Tarefa</router-link>
        <br/><br/>        
        <div class="card">
            <div class="card-header">
                Tasks
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>TASK_ID</th>
                            <th>TASKLIST_TITLE</th>
                            <th>USERNAME</th>
                            <th>TASK_NOTE</th>
                            <th>TASK_PRIORITY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in tasks" :key="task.task_id">
                            <td>{{task.task_id}}</td>
                            <td>{{task.task_title}}</td>
                            <td>{{task.username}}</td>
                            <td>{{task.task_note}}</td>
                            <td>{{task.task_priority}}</td>
                            <div class="btn-group" role="group" aria-label="">                                
                                <router-link :to="{name:'UpdateTask', params:{task_id:task.task_id}}" class="btn btn-info">Editar</router-link>
                                <button type="button" v-on:click="deleteTask(task.task_id)" class="btn btn-danger">Deletar</button>                                
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>

    </div>
</template>

<script>
export default {

    data(){
        return {
            tasks:[]             
        }
    },

    created: function () {
        this.getTasks();
    },
    methods:{
        
        getTasks(){
            fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/tasks`)
            .then(response=>response.json())
            .then((dataSet)=>{
                //console.log(dataSet)
                console.log(dataSet.result)                

                this.tasks = [];
                
                if (dataSet.erro == ''){                                        
                    this.tasks = dataSet.result;        
                }
            })
            .catch(console.log)
        },

        deleteTask(task_id){
            console.log("DeleteTask->task_id: " + task_id);

            //console.log(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/task/` + task_id);

            fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/task/` + task_id,{
                method:"DELETE"            
            })
            .then(response=>response.json())
            .then((requestResponse)=>{

                console.log(requestResponse)
                window.location.href="read"
            })
            .catch(console.log)  

        }
    }    
}
</script>