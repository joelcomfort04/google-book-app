using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Book.Repository.Models
{
    public class Comments
    {
        public IEnumerable<Comment> CommentList { get; set; }
    }
}
