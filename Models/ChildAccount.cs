using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactDemo2.Models
{
    public partial class ChildrenAccount
    {
        public int ParentId { get; set; }
        public float ChildId { get; set; }
        public string AccountName { get; set; }
        public int? FinancialId { get; set; }
        public float? RelatedAccount { get; set; }

        //public virtual ParentAccount ParentAccount { get; set; }
    }
}
