export default class Project {
    id: string;
    name: string;

    constructor(obj: any) {
        this.id = obj.id || '';
        this.name = obj.name || '';
    }
}