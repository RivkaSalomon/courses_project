using final_project;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace final_project.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SpeecherController : ControllerBase
  {
    public static List<Speecher> speechers = new List<Speecher>
        {
            new Speecher{Id= 1, Name="Mr. Cohen", Mail="d@g",Address="th",Password="77776"},
            new Speecher{Id= 2, Name="Mrs. Levi", Mail="fgh@rgdr",Address="mafghimon",Password="678"},
            new Speecher{Id= 3, Name="Mrs. Kukis", Mail="e@rgd",Address="maimon",Password="75"}
        };


    // GET: api/<SpeecherController>
    [HttpGet]
    public IEnumerable<Speecher> Get()
    {
      return speechers;
    }

    // GET api/<SpeecherController>/5
    [HttpGet("{id}")]
    public Speecher Get(int id)
    {
      var speecher = speechers.Find(x => id == x.Id);
      return speecher;
    }

        //[HttpGet]
        //[Route("login/{name}/{password}")]
        //public User LoginSpeecher(string name, string password)
        //{

        //    Speecher speecher = speechers.SingleOrDefault(user => user.Name == Name && user.Password == Password);
        //    return speecher;
        //}

    // POST api/<SpeecherController>
    [HttpPost]
    public void Post([FromBody] Speecher s)
    {
      speechers.Add(s);
    }

    // PUT api/<SpeecherController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Speecher s)
    {
      var a = speechers.Find(x => x.Id == id);

      //עדכון המשתנים
      a.Address = s.Address;
      a.Name = s.Name;
      a.Mail = s.Mail;
      a.Password = s.Password;
    }

    // DELETE api/<SpeecherController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var a = speechers.Find(x => x.Id == id);
      speechers.Remove(a);
    }
  }
}
