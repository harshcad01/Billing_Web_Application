using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mvcproject.Models;

namespace Mvcproject.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Dashboard()
    {
        return View();
    }

    public IActionResult Pos()
    {
        return View();
    }

    public IActionResult Sell()
    {
        return View();
    }

    public IActionResult Accounting()
    {
        return View();
    }

    public IActionResult Analysis()
    {
        return View();
    }

    public IActionResult Customer()
    {
        return View();
    }

    public IActionResult Expenditure()
    {
        return View();
    }

    public IActionResult Product()
    {
        return View();
    }

    public IActionResult Purchase()
    {
        return View();
    }

    public IActionResult Quotation()
    {
        return View();
    }

    public IActionResult Sms()
    {
        return View();
    }

    public IActionResult Stocktransfer()
    {
        return View();
    }

    public IActionResult Supplier()
    {
        return View();
    }

    public IActionResult Users()
    {
        return View();
    }

    public IActionResult Aboutus()
    {
        return View();
    }

    public IActionResult Services()
    {
        return View();
    }

    public IActionResult Signin()
    {
        return View();
    }

    public IActionResult Login()
    {
        return View();
    }






    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
