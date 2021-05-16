using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ReactDemo2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private static readonly String[] EntryIDs = new[]
        {
            "v1000", "v1020", "v1030", "v1040:010", "v1040:020", "v1040", "v1070", "v1080"
        };

        private static readonly string[] EntryNames = new[]
        {
            "Gross Sales",
            "Discounts and Returns",
            "Sales (Net)",
            "Cost of Goods Sold A",
            "Cost of Goods Sold B",
            "Cost of Goods Sold",
            "Gross Profit",
            "SG and A Expense"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

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
    }
}
