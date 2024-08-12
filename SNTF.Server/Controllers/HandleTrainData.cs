using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SNTF.Server.Interfaces;

namespace SNTF.Server.Controllers;


[Route("api/[controller]")]

[ApiController]
[EnableCors("AllowAnyOrigin")]

public class HandleTrainData : Controller
{
    private readonly ITrainOperations _trainOperations;

    public HandleTrainData(ITrainOperations trainOperations)
    {
       _trainOperations = trainOperations;
    }

    [HttpGet("/GETINFO")]



    public IActionResult gettrianinfo([FromQuery] string departinput, [FromQuery] string arrivageinput)
    {


        if (!ModelState.IsValid)
            return BadRequest();
        
 
        var trainInfos = _trainOperations.returnTrainData( _trainOperations.GetTrainData( departinput, arrivageinput),  departinput, arrivageinput);


        return Ok(trainInfos);

    }
    
    
}