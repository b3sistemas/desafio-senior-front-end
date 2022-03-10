<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="nav navbar-nav">          
          <router-link to="/create" class="nav-link">Adicionar</router-link>
          <router-link to="/read" class="nav-link">Listar</router-link>
          <router-link to="/read-auth" class="nav-link">Listar - Auth</router-link>
          <router-link to="/login" class="nav-link">Logout</router-link>
      </div>
  </nav>
  <br/>
  <router-view/>
</template>
