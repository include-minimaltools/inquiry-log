using System.Collections.Generic;
using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private InquiryModel _context;

        public UserController(InquiryModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetAll()
        => (from u in _context.User
            join r in _context.Role on u.Role equals r.Id
            select new
            {
                u.Name,
                u.Lastname,
                u.Phone,
                u.Address,
                u.Email,
                Role = r.Description
            }).ToList();
    }
}
