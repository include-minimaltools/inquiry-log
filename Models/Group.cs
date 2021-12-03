namespace inquiry_log.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Group")]
    public partial class Group
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Group()
        {
            Course_Group = new HashSet<Course_Group>();
            Inquiries = new HashSet<Inquiry>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Description { get; set; }

        public int Created_By { get; set; }

        public DateTime Created_On { get; set; }

        public int? Updated_By { get; set; }

        public DateTime? Updated_On { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Course_Group> Course_Group { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Inquiry> Inquiries { get; set; }
    }
}
