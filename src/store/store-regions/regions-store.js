
import {regions} from "./region-state";
import {regionReducer} from "./region-reducer";
let rerender = ()=>{};
let regionsStore = {
    get regions(){
        return regions;
    },
    update(){
        for (let region of regions){
            region.setColor();
        }
    },
    getValue(tag, type){
        let typeSumm = 0;
        for (let region of regions){
            if (region.owner.tag === tag){
                let typeValue = region[type];
                typeSumm += typeValue;
            }
        }
        return typeSumm;
    },
    dispatch(action) {
        regionReducer(regions, action);
        rerender();
    },
    setOwnerRegions(countriesState){
        for (let countryStateKey in countriesState){
            let countryState = countriesState[countryStateKey];
            for (let region of regions){
                if (region.ownerTag === countryState.tag) {
                    region.owner = countryState;

                }
            }
        }
    },
    setOnUpdate(callback){
        rerender = callback;
    }
}
export  default regionsStore;