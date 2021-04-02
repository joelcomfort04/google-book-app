using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Book.Repository.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string BookId { get; set; }

        public string Name { get; set; }

        public string Review { get; set; }

        public int Rating { get; set; }
    }
}
