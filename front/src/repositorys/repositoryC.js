class RepositoryC{
    #list;
    #inscritos;

    constructor(){
        this.#list = [];
        this.#inscritos = [];
    }
    inscrever(func){
        let insc = [...this.#inscritos, func]
        this.#inscritos = insc
    }
    desinscrever(func){
        let i = this.#inscritos.findIndex(func);
        this.#inscritos.splice(i,1);
    }
    notificar(){
        this.#inscritos.forEach(insc => {
            insc(this.#list);
        });
    }

    create(dev){
        let devs = [...this.#list, dev]
        this.#list = devs;
        this.notificar();
    }
    list(){
        return this.#list;
    }

}
export default RepositoryC;