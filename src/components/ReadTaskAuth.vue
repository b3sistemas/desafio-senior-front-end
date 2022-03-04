<template>
    <div class="container">
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
                            <td>
                                <a name="" id="" class="btn btn-primary" href="#" role="button">Alterar</a>
                                <a name="" id="" class="btn btn-primary" href="#" role="button">Deletar</a>                                
                            </td>
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
            fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/tasks-auth`)
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
        }
    }    
}
</script>