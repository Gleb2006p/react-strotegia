let ideas = {
    name: '',
    image: '',
    options : '',
    influences(store) {

    },
    addOptions(options) {
        this.options += options + '\n';
    },
    clearOptions(){
        this.options = '';
    },
    conditionAwaible(store){
    }
}
export default ideas;