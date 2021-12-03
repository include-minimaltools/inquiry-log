namespace inquiry_log.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    

    public partial class Inquiry_Comment
    {
        public int Id { get; set; }

        public int Inquiry { get; set; }

        [Required]
        [StringLength(100)]
        public string Comment { get; set; }

        public int Created_By { get; set; }

        public DateTime Created_On { get; set; }

        public int? Updated_By { get; set; }

        public DateTime? Updated_On { get; set; }

        public virtual Inquiry Inquiry1 { get; set; }
    }
}
