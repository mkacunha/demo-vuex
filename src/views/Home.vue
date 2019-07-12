<template>
  <div class="home">
    {{ projectStore.allProjects }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators'
import HelloWorld from '@/components/HelloWorld.vue'; 
import ProjectService from '@/domain/project/project.service';
import ProjectStore from '@/domain/project/project.store';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private projectStore = getModule(ProjectStore);

  created() {
    this.projectStore.fetchProjects();
    console.log(this.projectStore.allProjects)
  }
}
</script>
