using System;
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
            where inquiry.Status != "Deleted"
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

        [HttpGet("[action]")]
        public dynamic Get(int id)
        => (from i in _context.Inquiry
            where i.Id == id && i.Status != "Deleted"
            select new
            {
                i.Id,
                students_number = i.Students_Number,
                i.Week,
                i.Type,
                i.Subject,
                i.Created_On,
                i.Carnet,
                i.Status,
                i.Course,
                i.Group,
                i.Observations,
                i.Semester
            }).FirstOrDefault();

        [HttpPost("[action]")]
        public bool InsertOrUpdate([FromBody] Inquiry inquiry)
        {
            try
            {
                bool exist = _context.Inquiry.Any(i => i.Id == inquiry.Id);

                if (exist)
                {
                    var old = _context.Inquiry.First(i => i.Id == inquiry.Id);
                    old.Updated_By = inquiry.Updated_By;
                    old.Updated_On = DateTime.Now;
                    old.Students_Number = inquiry.Students_Number;
                    old.Week = inquiry.Week;
                    old.Type = inquiry.Type;
                    old.Subject = inquiry.Subject;
                    old.Carnet = inquiry.Carnet;
                    old.Status = inquiry.Status;
                    old.Course = inquiry.Course;
                    old.Group = inquiry.Group;
                    old.Observations = inquiry.Observations;
                    old.Semester = inquiry.Semester;
                    _context.Entry(old).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                }
                else
                {
                    inquiry.Created_On = DateTime.Now;
                    _context.Inquiry.Add(inquiry);
                }

                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        [HttpPost("[action]")]
        public bool UpdateInquiryStatus([FromBody] int id, [FromBody] string status, [FromBody] int updated_by)
        {
            try
            {
                if (_context.User.First(u => u.Id == updated_by).Role != 1 || _context.User.First(u => u.Id == updated_by).Role != 2)
                {
                    return false;
                }

                var inquiry = _context.Inquiry.FirstOrDefault(i => i.Id == id);

                if (inquiry == null)
                    return false;

                inquiry.Updated_By = inquiry.Updated_By;
                inquiry.Updated_On = DateTime.Now;

                inquiry.Status = status;
                _context.Entry(inquiry).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
