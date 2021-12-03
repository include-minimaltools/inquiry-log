using System.Collections.Generic;
using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class PermissionController : Controller
    {
        private InquiryModel _context;

        public PermissionController(InquiryModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetAll()
        => (from p in _context.Permission
            select new
            {
                p.Id,
                p.Description
            }).ToList();
    }
}
