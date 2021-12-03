namespace inquiry_log.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Inquiry")]
    public partial class Inquiry
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Inquiry()
        {
            Inquiry_Comment = new HashSet<Inquiry_Comment>();
        }

        public int Id { get; set; }

        public int Week { get; set; }

        public int Students_Number { get; set; }

        public int Type { get; set; }

        [Required]
        [StringLength(200)]
        public string Subject { get; set; }

        [Required]
        [StringLength(10)]
        public string Carnet { get; set; }

        [StringLength(500)]
        public string Observations { get; set; }

        [Required]
        [StringLength(10)]
        public string Status { get; set; }

        public int Teacher { get; set; }

        public int Course { get; set; }

        public int Group { get; set; }

        public int Semester { get; set; }

        public int Created_By { get; set; }

        public DateTime Created_On { get; set; }

        public int? Updated_By { get; set; }

        public DateTime? Updated_On { get; set; }

        public virtual Course Course1 { get; set; }

        public virtual Group Group1 { get; set; }

        public virtual User User { get; set; }

        public virtual Inquiry_Type Inquiry_Type { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Inquiry_Comment> Inquiry_Comment { get; set; }
    }
}
