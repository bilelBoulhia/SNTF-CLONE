using SNTF.Server.Interfaces;
using SNTF.Server.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ITrainOperations, TrainSechuleManipulation>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin",
        policy =>
        {
            policy 
                .WithOrigins("https://sntfclone.fin-tech.com","https://bilelboulahia2-001-site1.ctempurl.com","https://localhost:44310" ,"https://localhost:5173","https://localhost:5174")
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
});

// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("AllowAnyOrigin",
//         policy =>
//         {
//             policy 
//                 .AllowAnyOrigin()
//                 .AllowAnyMethod()
//                 .AllowAnyHeader();
//         });
// });


var app = builder.Build();
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseHttpsRedirection();
app.UseCors("AllowOrigin");
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");


app.UseAuthorization();
app.MapControllers();
app.Run();
