using Book.Repository.Interfaces;
using Book.Repository.Models;
using Microsoft.AspNetCore.Mvc;

namespace CommentApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {

        private IBookRepository _bookRepository;

        public BookController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        [HttpGet("{bookId}")]
        public Comments GetCommentsByBook([FromRoute]string bookId)
        {
            return _bookRepository.GetBookComments(bookId);
           
        }

        [HttpPost]
       public void Post([FromBody] Comment comment)
        {
            _bookRepository.SaveComment(comment);

        } 
    }
}
