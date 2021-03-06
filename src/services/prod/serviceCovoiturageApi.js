import axios from "axios"
const urlcovoiturage = process.env.VUE_APP_URLCOVOITURAGE;


class serviceCovoiturageApi {

    static getAll(headers) {
        console.log("header : " + headers);
        return axios.get(urlcovoiturage + "/all",{headers})
      }

    static getCovoiturageFromDepartArriveeDateFromAPiToStore(villeDepart, villeArrivee, dateRecherche,headers) {
        console.log("API ville depart : "+villeDepart);
        console.log("API ville arrivee : "+villeArrivee);
        console.log("API date recherche : "+dateRecherche);
        console.log("API Headers : " +headers);
        return axios.get(urlcovoiturage +
            `/covoiturages?villeDepart=${villeDepart}&villeArrivee=${villeArrivee}&dateRecherche=${dateRecherche}`,{headers});
    }

    static annulerReservation(covoiturageId, headers){
        axios.delete(urlcovoiturage+'/'+covoiturageId, {headers})
    }

    static sendReservation(covoiturageId, headers) {
        let urlReservation =  urlcovoiturage + "/select/"+covoiturageId;
        console.log(urlReservation);
        console.log("headers : " + JSON.stringify(headers));
        axios.post(urlReservation,{},{headers} )
    }
}

export { serviceCovoiturageApi }