<template>
  <div class="row">
    <div class="col-4 mt-5">
      <ul class="list-group bg-dark">
        <li
          class="list-group-item"
          :class="[currentView == 'ContentComponent' ? 'active' : '']"
        >
          <a
            href="#"
            @click.prevent="currentView = 'ContentComponent'"
            :class="[currentView == 'ContentComponent' ? 'text-light' : '']"
            >Home</a
          >
        </li>
        <li
          class="list-group-item"
          :class="[currentView == 'ContactComponent' ? 'active' : '']"
        >
          <a
            class=""
            href="#"
            @click.prevent="currentView = 'ContactComponent'"
            :class="[currentView == 'ContactComponent' ? 'text-light' : '']"
            >Contact</a
          >
        </li>
        <li
          class="list-group-item"
          :class="[currentView == 'AboutComponent' ? 'active' : '']"
        >
          <a
            href="#"
            @click.prevent="currentView = 'AboutComponent'"
            :class="[currentView == 'AboutComponent' ? 'text-light' : '']"
            >About</a
          >
        </li>
        
      </ul>
    </div>
    <div class="col-8">
      <keep-alive><component :is="currentView" /></keep-alive>
    </div>
  </div>
</template>

<script>
import ContactComponent from './ContactComponent.vue'
import AboutComponent from './AboutComponent.vue'
import ContentComponent from './ContentComponent.vue'
export default {
  data() {
    return {
      currentView: 'ContentComponent',
    }
  },
  components: {
    ContactComponent,
    AboutComponent,
    ContentComponent,
    
  },
}
</script>
