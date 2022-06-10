<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-2 container">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><i>APP</i>
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ms-4">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="mx-4" to="/test1">Test1 Routed</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/test2">Test2 Routed</router-link>
            </li>
          </ul>
          <form class="d-flex">
            
            
          </form>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script></script>
