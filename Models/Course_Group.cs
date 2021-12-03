namespace inquiry_log.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class Course_Group
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Course { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Group { get; set; }

        public int Created_By { get; set; }

        public DateTime Created_On { get; set; }

        public int? Updated_By { get; set; }

        public DateTime? Updated_On { get; set; }

        public virtual Group Group1 { get; set; }
    }
}
