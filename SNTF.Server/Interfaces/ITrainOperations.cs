

using System.Text.Json.Nodes;
using Newtonsoft.Json.Linq;
using SNTF.Server.Data.Model;

namespace SNTF.Server.Interfaces;

public interface ITrainOperations
{

    public ICollection<JObject> GetTrainData(string arrivage , string retour);

    public ICollection<TrainInfo> returnTrainData(ICollection<JObject> collection,string departInput, string arrivageInput);
    
    
    public string[] GetRelevantJsonFiles(TrainGares depart, TrainGares arrivage);










}