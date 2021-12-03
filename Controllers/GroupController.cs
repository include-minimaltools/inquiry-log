using System.Collections.Generic;
using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class GroupController : Controller
    {
        private InquiryModel _context;

        public GroupController(InquiryModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetByCourse(int id)
        {
            var result = (from cg in _context.Course_Group
                          join g in _context.Group on cg.Group equals g.Id
                          where cg.Course == id
                          select new
                          {
                              g.Id,
                              g.Description,
                          });

            return result;
        }
    }
}
