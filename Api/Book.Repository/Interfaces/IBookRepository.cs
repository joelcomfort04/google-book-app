using Book.Repository.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Book.Repository.Interfaces
{
   public interface IBookRepository
    {
        Comments GetBookComments(string bookId);

        void SaveComment(Comment comment);
    }
}
