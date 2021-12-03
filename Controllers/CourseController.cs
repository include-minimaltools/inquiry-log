using System.Collections.Generic;
using System.Linq;
using inquiry_log.Models;
using Microsoft.AspNetCore.Mvc;

namespace inquiry_log.Controllers
{
    [Route("api/[controller]")]
    public class CourseController : Controller
    {
        private InquiryModel _context;

        public CourseController(InquiryModel context)
        {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetByUser(int id)
        => (from uc in _context.User_Course
            join c in _context.Course on uc.Course equals c.Id
            where uc.User == id
            select new
            {
                c.Id,
                c.Name,
            });

    }
}
