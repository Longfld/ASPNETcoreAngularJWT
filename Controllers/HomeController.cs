using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ASPNETCoreAngularJWT
{
    public class HomeController : Controller
    {
         public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
       

        public IActionResult Index()
        {
          _logger.LogError("HomeController: Helloworld from Index");
            return View();
        }
        private readonly ILogger<HomeController> _logger;
    }
}
