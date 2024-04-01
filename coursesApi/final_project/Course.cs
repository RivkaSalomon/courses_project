namespace final_project
{
  public enum ELearningWay { zoom, frontal };

  public class Course
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int categoryId { get; set; }
    public int Count { get; set; }
    public DateTime StartDate { get; set; }
    //public List<string> Syllabus = new List<string>();
    public List<string> Syllabus { get; set; }
    public int SpeecherId { get; set; }
    public string Img { get; set; }
    public ELearningWay LearningWay { get; set; }

    public List<string> Get()
    {
      return Syllabus;
    }
    public void Set(string s)
    {
      Syllabus.Add(s);
    }

    public Course()
    {
      Syllabus = new List<string>();

    }
  }
}
