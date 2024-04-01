using final_project;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace final_project.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CategoryController : ControllerBase
  {
    public static List<Category> categories = new List<Category>
        {
            new Category{Id= 1, Name="boys", Icon="http//fhg"},
            new Category{Id= 2, Name="girls", Icon="http//fgfsa"},
        };




    // GET: api/<CategoryController>
    [HttpGet]
    public IEnumerable<Category> Get()
    {
      return categories;
    }

    // GET api/<CategoryController>/5
    [HttpGet("{id}")]
    public Category Get(int id)
    {
      var category = categories.Find(x => x.Id == id);
      return category;
    }

    // POST api/<CategoryController>
    [HttpPost]
    public void Post([FromBody] Category category)
    {
      categories.Add(category);
    }

    // PUT api/<CategoryController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Category category)
    {
      var r=categories.Find(x => x.Id == id);

      r.Name=category.Name;
      r.Icon=category.Icon;
    }

    // DELETE api/<CategoryController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var c = categories.Find(x => id == x.Id);
      categories.Remove(c);
    }
  }
}
