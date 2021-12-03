namespace inquiry_log.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    

    public partial class User_Course
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int User { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Course { get; set; }

        public int Created_By { get; set; }

        public DateTime Created_On { get; set; }

        public int? Updated_By { get; set; }

        public DateTime? Updated_On { get; set; }

        public virtual Course Course1 { get; set; }

        public virtual User User1 { get; set; }
    }
}
