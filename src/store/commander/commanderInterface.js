let commander = {
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
    }
}
export default  commander;