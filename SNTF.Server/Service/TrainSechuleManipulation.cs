using System.Text.Json.Nodes;
using Newtonsoft.Json.Linq;
using SNTF.Server.Data.Model;
using SNTF.Server.Interfaces;

namespace SNTF.Server.Service;

public class TrainSechuleManipulation : ITrainOperations
{
    

    public ICollection<JObject> GetTrainData(string departInput, string arrivageInput)
    {
        List<JObject> jsonTrainCollection = new List<JObject>();


        TrainGares depart;
        TrainGares arrivage;

        if (!Enum.TryParse(departInput, out depart))
        {
            throw new ArgumentException("Invalid departure station", nameof(departInput));
        }

        if (!Enum.TryParse(arrivageInput, out arrivage))
        {
            throw new ArgumentException("Invalid arrival station", nameof(arrivageInput));
        }

        string[] relevantJsonFiles = GetRelevantJsonFiles(depart, arrivage);

            foreach (var file in relevantJsonFiles)
            {
                string jsonContent = File.ReadAllText(file);
                JObject jsonData = JObject.Parse(jsonContent);
                jsonTrainCollection.Add(jsonData);
            }


        return jsonTrainCollection;
    }

    public string[] GetRelevantJsonFiles(TrainGares depart, TrainGares arrivage)
    {
        
       
        
        
        {/*
        
        string allerjsonsDirectory = @"C:\Users\Origin Systems\source\repos\SNTF\SNTF.Server\Data\TrainBanlieue_West\Aller(alger-thenia)";
        string retourjsonDiretory = @"C:\Users\Origin Systems\source\repos\SNTF\SNTF.Server\Data\TrainBanlieue_West\Rotour(thenaia_alger)";

        
           string allerjsonsDirectory = @"h:\root\home\bilelboulahia2-001\www\sntfcloneserver\Data\TrainBanlieue_West\Aller(alger-thenia)";
        string retourjsonDiretory = @"h:\root\home\bilelboulahia2-001\www\sntfcloneserver\Data\TrainBanlieue_West\Rotour(thenaia_alger)";
        
        
        
        */}
        
        string allerjsonsDirectory = @"h:\root\home\bilelboulahia2-001\www\sntfcloneserver\Data\TrainBanlieue_West\Aller(alger-thenia)";
        string retourjsonDiretory = @"h:\root\home\bilelboulahia2-001\www\sntfcloneserver\Data\TrainBanlieue_West\Rotour(thenaia_alger)";
        int compareResult = depart.CompareTo(arrivage);
        if (compareResult < 0)
        {
            return Directory.GetFiles(allerjsonsDirectory, "*.json");
        }
        else if (compareResult > 0)
        {
            return Directory.GetFiles(retourjsonDiretory, "*.json");
        }
        else
        {
            return new string[0];
        }
    }


    public ICollection<TrainInfo> returnTrainData(ICollection<JObject> collection, string departInput, string arrivageInput)
    {
        List<TrainInfo> traininformations = new List<TrainInfo>();

        foreach (var json in collection)
        {
            JArray? horaireArray = (JArray?)json["Horraires"];
            string? status = (string?)json["Status"];
            int numero = (int)json["Numero"];
            string linge = (string)json["Linge"];

        
            JToken departureToken = horaireArray.FirstOrDefault(t => ((JObject)t)["Station"].ToString() == departInput);
            
            
            JToken arrivalToken = horaireArray.FirstOrDefault(t => ((JObject)t)["Station"].ToString() == arrivageInput);

            if (departureToken != null && arrivalToken != null)
            {
                TrainInfo trainInfo = new TrainInfo
                {
                    DepartStation = departInput,
                    DepartTime = ((JObject)departureToken)["Departure"].ToString(),
             
                    ArrivageStation = arrivageInput,
                    arrivageTime = ((JObject)arrivalToken)["Departure"].ToString(),
                    
                    
                    NumeroTrain = numero,
                    statusTrain = status,
                    linge = linge
                };

                traininformations.Add(trainInfo);
            }
        }

        return traininformations;
    }
}