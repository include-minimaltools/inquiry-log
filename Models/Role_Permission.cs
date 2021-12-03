namespace inquiry_log.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    

    public partial class Role_Permission
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Role { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Permission { get; set; }

        public int Created_By { get; set; }

        public DateTime Created_On { get; set; }

        public int? Updated_By { get; set; }

        public DateTime? Updated_On { get; set; }

        public virtual Permission Permission1 { get; set; }

        public virtual Role Role1 { get; set; }
    }
}
