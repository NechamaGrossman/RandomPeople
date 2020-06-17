using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RandomPeople.Data
{
    public class PeopleRepository
    {
        private string _connectionString;
        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public Person CreateRandomPerson( int min, int max)
        {
            Random random = new Random();
            Person p = new Person
            {
                FirstName = Faker.Name.First(),
                LastName = Faker.Name.Last(),
                Age = random.Next(min, max)
            };
            return p;
        }
        public void AddPerson(Person person)
        {
            using(var context = new PeopleContext(_connectionString))
            {
                context.Add(person);
                context.SaveChanges();
            }
        }
        public List<Person> GetPeople()
        {
            using (var context = new PeopleContext(_connectionString))
            {
                return context.People.ToList();
            }
        }
    }
}
