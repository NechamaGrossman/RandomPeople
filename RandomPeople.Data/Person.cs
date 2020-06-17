using System;
using System.Collections.Generic;
using System.Text;

namespace RandomPeople.Data
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public int Id { get; set; }
        public DateTime? DateOfBirth { get; set; }
    }
}
