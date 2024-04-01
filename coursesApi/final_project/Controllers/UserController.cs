using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace final_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {


        public static List<User> users = new List<User>
        {
            new User{Id= 1, Name="חנה", Mail="d@g",Address="Maimon",Password="1111"},
            new User{Id= 2, Name="שרית", Mail="fgh@rgdr",Address="Simchony",Password="2222"},
            new User{Id= 3, Name="רבקי", Mail="e@rgd",Address="Rambam",Password="3333"}
        };

        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return users;
        }


        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            var user = users.Find(x => x.Id == id);

            return user;
        }

        [HttpGet]
        [Route("login/{name}/{password}")]
        public User Login(string name, string password)
        {
            User user = users.SingleOrDefault(user => user.Name == name && user.Password == password);
            return user;
        }





        // POST api/<UserController>
        [HttpPost]
        public bool Post([FromBody] User user)

        {
            //if (!ModelState(user))
            //  return false;
            users.Add(user);
            return true;
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public bool Put(int id, [FromBody] User user)
        {
            //id - מציאת אוביקט עפי ה
            var a = users.Find(x => x.Id == id);
            if (a.Address == user.Address && a.Name == user.Name && a.Mail == user.Mail && a.Password == user.Password)
                //עדכון המשתנים
                a.Address = user.Address;
            a.Name = user.Name;
            a.Mail = user.Mail;
            a.Password = user.Password;
        
        return true;
    }

    // DELETE api/<UserController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var a = users.Find(x => x.Id == id);
      users.Remove(a);
    }
  }
}
