using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class InquiryController : Controller
    {
        private InquiryModel _context;

        public InquiryController(InquiryModel context)
        {
            _context = context;
        }
        
        [HttpGet("[action]")]
        public dynamic Login(string email, string password)
        {
            var user = _context.User.Where(x => x.Email == email && x.Password == password).ToList();

            if (user.Count == 0)
                return new { status = "error", message = "User not found" };

            return new { status = "success", message = "User found", user = user };
        }
    }
}
