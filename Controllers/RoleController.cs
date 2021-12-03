using System.Collections.Generic;
using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class RoleController : Controller
    {
        private InquiryModel _context;

        public RoleController(InquiryModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetAll()
        => (from r in _context.Role
            select new
            {
                r.Id,
                r.Description
            }).ToList();
    }
}
