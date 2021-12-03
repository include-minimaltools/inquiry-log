using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private InquiryModel _context;

        public AuthController(InquiryModel context)
        {
            _context = context;
        }
        
        [HttpGet("[action]")]
        public dynamic Login(string email, string password)
        {
            var data = (from u in _context.User
                       join r in _context.Role on u.Role equals r.Id
                       where u.Email == email && u.Password == password
                       select new
                       {
                           u.Id,
                           u.Name,
                           u.Lastname,
                           u.Email,
                           u.Password,
                           u.Address,
                           u.Phone,
                           u.Role,
                           Role_name = r.Description
                       }).FirstOrDefault();

            if (data == null)
                return new { status = "error", message = "User not found" };

            return new { status = "success", message = "User found", data = data };
        }
    }
}
