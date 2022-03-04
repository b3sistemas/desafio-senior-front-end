<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Fazer login
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="doLogin">
                    <div class="form-group">
                      <label for="username">Usuário:</label>
                      <input type="text"
                        class="form-control" name="username" id="username" v-model="task.username" aria-describedby="helpId" placeholder="Digite seu usuário">
                      <small id="helpId" class="form-text text-muted">Usuário de acesso</small>
                    </div>

                    <div class="form-group">
                      <label for="password">Password:</label>
                      <input type="password"
                        class="form-control" name="password" id="password" v-model="task.password" aria-describedby="helpId" placeholder="Digite sua senha">
                      <small id="helpId" class="form-text text-muted">Senha de acesso</small>
                    </div>

                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Entrar</button>                        
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
        doLogin(){
           // console.log(this.task);

            var taskData = {              
                username:this.task.username,
                password:this.task.password
            }

            //console.log(JSON.stringify(taskData))
            //note: .then (Promise)

            fetch(`http://${process.env.VUE_APP_vue_ip_address}:8181/api/login`,{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(taskData)
            })
            .then(response=>response.json())
            .then((responseData=>{
                console.log(responseData);
                //window.location.href='';
            }))
        }
    }
}
</script>