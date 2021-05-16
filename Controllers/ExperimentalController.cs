using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactDemo2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExperimentalController : ControllerBase
    {
        private readonly ILogger<ExperimentalController> _logger;

        public ExperimentalController(ILogger<ExperimentalController> logger)
        {
            _logger = logger;
        }

        /*
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, EntryIDs.Length).Select(index => new WeatherForecast
            {
                EntryID = EntryIDs[index - 1],
                EntryName = EntryNames[index - 1],
                BaseYear1 = rng.Next(-10000, 10000),
                BaseYear2 = rng.Next(-10000, 10000),
                ForecastYear1 = rng.Next(-10000, 10000),
            })
            .ToArray();
        }
        */
    }
}
