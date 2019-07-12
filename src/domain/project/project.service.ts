import Project from './project.entity';
import axios from 'axios';

export default class ProjectService {
    getAll(): Promise<Project[]> {
        return axios
            .get('/mock/projects.json')
            .then(response => response.data.map((project: any) => new Project(project)));
    }
}