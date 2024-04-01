using final_project;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace final_project.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CourseController : ControllerBase
  {



    public static List<Course> courses = new List<Course>
        {

            new Course{Id= 1, Name="שחייה", Img="swimming.jpg",Count=12,StartDate=new DateTime(2024,4,5),Syllabus=new List<string>{"פרפר" ,"חתירה"},LearningWay=ELearningWay.frontal,categoryId=2,SpeecherId=456  },
            new Course{Id= 2, Name="אנגלית חוייתית", Img="english.jpg",Count=16,StartDate=new DateTime(2024,5,10),Syllabus=new List<string>{"אוצר מילים" ,"ביטחון בדיבור"},LearningWay=ELearningWay.zoom,categoryId=1,SpeecherId=123  },
            new Course{Id= 3, Name="ציור", Img="drawing.jpg",Count=4,StartDate=new DateTime(2024,4,5),Syllabus=new List<string>{"ציור דמויות" ,"קרקטורת" ,"אור וצל"},LearningWay=ELearningWay.zoom,categoryId=2,SpeecherId=333  },
            new Course{Id= 4, Name="דרמה", Img="drama.JPG",Count=8,StartDate=new DateTime(2024,3,26),Syllabus=new List<string>{"ריקוד" ,"הצגת סיום"},LearningWay=ELearningWay.frontal,categoryId=2,SpeecherId=444  },
            new Course{Id= 5, Name="אקריליק", Img="acrylic.jpg",Count=7,StartDate=new DateTime(2024,4,5),Syllabus=new List<string>{"צביעת אמנות" ,"הכרת כח הצביעה" ,"נופים"},LearningWay=ELearningWay.frontal,categoryId=1,SpeecherId=222  },
        };

    

    // GET: api/<CourseController>
    [HttpGet]
    public IEnumerable<Course> Get()
    {
      return courses;
    }
    
    // GET api/<CourseController>/5
    [HttpGet("{id}")]
    public Course Get(int id)
    {
      var c= courses.Find(x=>id==x.Id);
      return c;
    }

    // POST api/<CourseController>
    [HttpPost]
    public void Post([FromBody] Course course)
    {
      course.Id = courses.Max(x => x.Id) + 1;
      courses.Add(course);
    }

    // PUT api/<CourseController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Course course)
    {
      var c=courses.Find(x=>id==x.Id);

      c.StartDate=course.StartDate;
      c.SpeecherId=course.SpeecherId;
      c.categoryId = course.categoryId;
      c.Name = course.Name;
      c.Count=course.Count;
      c.Img = course.Img;
      c.Syllabus = course.Syllabus;
      c.LearningWay = course.LearningWay;
    }

    // DELETE api/<CourseController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var f=courses.Find(x=>id==x.Id);
      courses.Remove(f);
    }
  }
}
