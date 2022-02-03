import {serviceCovoiturageApi} from "../../services/index";
// import serviceCovoiturageApi from "@/services"

const storeCovoiturage = {
  state: {
    monState: "State Store 01",
    user: { "id": 1, "nom": "Mourier", "prenom": "Denis" },
    listecovoiturage: null,

  },
  getters: {
    allCovoiturage: state => {
      return state.listecovoiturage;
    },

    getAllCovoiturageUserId: (state) => {
      // state.listecovoiturage = serviceCovoiturageApi.getAll(state.user.id);
      serviceCovoiturageApi.getAll(state.user.id)
      .then(
        (response) => {
          state.listecovoiturage = response.data
          console.log("response.data : ", response.data);
        }
      );
      console.log("retour service liste covoiturage : ", state.listecovoiturage);
   },
  //  getfromLocalStorage(data) {
  //   store.state.listecovoiturage = data;
  //  }


  }

};

export {storeCovoiturage}