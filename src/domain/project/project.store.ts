import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import Project from './project.entity';
import store from '@/store';
import ProjectService from './project.service';

@Module({ dynamic: true, name: 'projectStore',  store })
export default class ProjectStore extends VuexModule {
  private projects: Project[] = [];
  private projectService = new ProjectService();

  @Mutation
  updateProjects(projects: Project[]) {
    this.projects = projects;
  }

  @Action
  async fetchProjects() {
      const fetched = await this.projectService.getAll();
      this.updateProjects(fetched);
  }

  get allProjects(): Project[] {
    return this.projects;
  }
}
