using System.Collections.Generic;
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
        public IEnumerable<dynamic> GetAll()
        => (from inquiry in _context.Inquiry
            join type in _context.Inquiry_Type on inquiry.Type equals type.Id
            join course in _context.Course on inquiry.Course equals course.Id
            join Group in _context.Group on inquiry.Group equals Group.Id
            select new
            {
                inquiry.Id,
                inquiry.Students_Number,
                inquiry.Week,
                Type = type.Description,
                inquiry.Subject,
                inquiry.Created_On,
                inquiry.Carnet,
                inquiry.Status,
                Course = course.Name,
                Group = Group.Description,
            });

        [HttpGet("[action]")]
        public IEnumerable<dynamic> GetTypes()
        => (from type in _context.Inquiry_Type
            select new
            {
                type.Id,
                type.Description,
            });
    }
}
