import commander from "../commander/commanderInterface";
import ideas from "../ideas/ideasInterface";
import IDEA_TAG from "../ideas/idea-tag";
import countryTag from "./country-tag";
import regionsStore from "../store-regions/regions-store";


let CountiesState = {
    sikvoa: {
        tag : countryTag.SIK,
        rulingParty: IDEA_TAG.MON,
        armyColor : 'darkblue',
        color: 'royalblue',
        flags: {
            imperialism: 'imperialist_sikvoa.png',
            democracy: 'democracy_sikvoa.png',
            communism: 'communist_sikvoa.png',
            monarchy: 'sikvoa.png',
        },
        currentFlag: 'sikvoa.png',
        ideologues: {
            communism: 0,
            monarchy: 66,
            imperialism: 33,
            democracy: 0,
        },
        ideologuesColors: [
            'red',
            'royalblue',
            'purple',
            'blue',
        ],
        ideologuesDrift: {
            communism: 0,
            monarchy: 0,
            imperialism: 0,
            democracy: 0,
        },
        commanders: [
            {
                __proto__: commander,
                name: 'Глеб',
                image: 'images/commanders/gleb.png',

                influence(store) {
                    store.setDrift(IDEA_TAG.IMP, 1, this)
                },
            },
            {
                __proto__: commander,
                name: 'Дима',
                image: 'images/commanders/dima.png',

                influence(store) {
                    store.setDrift(IDEA_TAG.MON, 0.5, this);
                },


            }
        ],
        ideas: [
            {
                __proto__: ideas,
                name: 'Анти Коммунизм',
                image: 'images/ideas/anti-communism.png',
                influences(store) {
                    store.setDrift(IDEA_TAG.COM, -0.1, this);
                },
                conditionAwaible(store) {
                    return store.rulingParty !== IDEA_TAG.COM;
                }
            },
            {
                __proto__: ideas,
                name: 'Легион Понасенкова',
                image: 'images/ideas/legion_of_ponasenkov.png',
                influences(store) {
                    store.setDrift(IDEA_TAG.DEM, 1.5, this);
                },
                conditionAwaible(store) {
                    return store.rulingParty !== IDEA_TAG.COM;
                }
            }


        ],
    },
    sikvoa_comunism : {
        tag : countryTag.SCO,
        rulingParty: IDEA_TAG.COM,
        armyColor: 'red',
        color: 'brown',
        flags: {
            imperialism: 'imperialist_sikvoa.png',
            democracy: 'democracy_sikvoa.png',
            communism: 'communist_sikvoa.png',
            monarchy: 'sikvoa.png',
        },
        currentFlag: 'sikvoa.png',
        ideologues: {
            communism: 60,
            monarchy: 0,
            imperialism: 0,
            democracy: 40,
        },
        factoriesValue: 100,
        ideologuesColors: [
            'red',
            'royalblue',
            'purple',
            'blue',
        ],
        ideologuesDrift: {
            communism: 0,
            monarchy: 0,
            imperialism: 0,
            democracy: 0,
        },
        commanders: [
            {
                __proto__: commander,
                name: 'Глеб',
                image: 'images/commanders/gleb.png',

                influence(store) {
                    store.setDrift(IDEA_TAG.IMP, 1, this)
                },
            },
            {
                __proto__: commander,
                name: 'Дима',
                image: 'images/commanders/dima.png',

                influence(store) {
                    store.setDrift(IDEA_TAG.MON, 0.5, this);
                },

            }
        ],
        ideas: [

        ],
    },
};

regionsStore.setOwnerRegions(CountiesState);
regionsStore.update();
export  default CountiesState;