import axios from 'axios'
export default async function GetTrainData(Depart, Arrivage) {
   
//
    
        const response = await axios.get(`https://sntfclone.fin-tech.com/GETINFO?departinput=${Depart}&arrivageinput=${Arrivage}`);
        const data = response.data;
        const dataArray = Object.values(data);
        const formedData = dataArray.map((e) => ({
            DepartStation: e.departStation,
            ArrivageStation: e.arrivageStation,
            DepartTime: e.departTime,
            ArrivageTime: e.arrivageTime,
            NumeroTrain: e.numeroTrain,
            StatusTrain: e.statusTrain,
            Linge: e.linge,
        }));
        
        
        return formedData;
   
}