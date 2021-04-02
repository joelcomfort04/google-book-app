using Book.Repository.Interfaces;
using Book.Repository.Models;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Book.Repository
{
    public class BookRepository : IBookRepository
    {
        private IDbConnection _db;

        public BookRepository(IConfiguration config)
        {
            _db = new SqlConnection(config.GetConnectionString("BookCommentDB"));
        }

        public Comments GetBookComments(string bookId)
        {

            string sql = "Select * from Comment WHERE BookId= @BookId";

            var parameters = new { BookId = bookId };

            var commentList = _db.Query<Comment>(sql, parameters);

            var comments = new Comments { CommentList = commentList };

            return comments;
           
        }

        public void SaveComment(Comment comment)
        {
            throw new NotImplementedException();
        }
    }
}
