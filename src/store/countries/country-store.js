import {politicsReducer} from "../politics-reducer";
import CountiesState from "./counties-state";
import regionsStore from "../store-regions/regions-store";

function rerender(){

}

let countryStore = {
    _state : CountiesState.sikvoa,
    dispatch(action){
        politicsReducer(this, action);
        rerender();
    },
    updateFactory(){
       this._state.factoriesValue =  regionsStore.getValue(this._state.tag, "factoryValue");
    },
    updateIdeas(){
        let index = 0;
        for (let idea of this._state.ideas){
            if (!idea.conditionAwaible(countryStore)){
                this._state.ideas.splice(index, 1);
            }
            index ++
        }
    },
    updateCurrentFlag(){
        this._state.currentFlag = this._state.flags[this._state.rulingParty];
    },
    normalizeIdeologues(){
        let summIdeology = 0;
      for (let ideology in this._state.ideologues){
          let ideologyValue = this._state.ideologues[ideology];
          summIdeology += ideologyValue;
      }
      for (let ideology in this._state.ideologues){
          this._state.ideologues[ideology] /= summIdeology;
          this._state.ideologues[ideology] *= 100;
      }
    },
    update(){
        this._state.ideologuesDrift = {
            communism : 0,
            monarchy : 0,
            imperialism : 0,
            democracy : 0,
        };
        for (let commander of this._state.commanders){
            commander.influence(this);
        }
        for (let idea of this._state.ideas){
            idea.influences(this);
        }
        for (let ideology in this._state.ideologuesDrift){
            this._state.ideologues[ideology] += this._state.ideologuesDrift[ideology];
            if (this._state.ideologues[ideology] < 0){
                this._state.ideologues[ideology] = 0.01;
            }
        }
        this.updateFactory();
        this.updateIdeas();
        this.updateRulingParty();
        this.updateCurrentFlag();
        this.normalizeIdeologues();
        console.log(this._state.factoriesValue);
    },
    updateRulingParty(){
        for (let ideology in this._state.ideologues){
            let ideologyPopularity = this._state.ideologues[ideology];
            if (ideologyPopularity > 50){
                this._state.rulingParty = ideology;
            }
        }
    },
    setDrift(ideology, driftValue, user){
        user.clearOptions();
        this._state.ideologuesDrift[ideology] += driftValue;
        user.addOptions(`Поддержка идеологии ${ideology} +${driftValue}`);

    },
    setUpdate(callback){
        rerender = callback;
    },
    generateIdeologuesData(){
        let data = [];

        for (let ideology in this._state.ideologues){

            let population = this._state.ideologues[ideology];
            let dataObject = [ideology, population];
            data.push(dataObject)
        }
        return data;
    },
    get rulingParty(){
        return this._state.rulingParty;
    },
    get commanders(){
        return this._state.commanders;
    },
    get ideas(){
        return this._state.ideas;
    },
    get flag(){
        return `images/flags/${this._state.currentFlag}`;
    },
    get ideologuesColor(){
        return this._state.ideologuesColors;
    },

}
countryStore.update();
export default countryStore;