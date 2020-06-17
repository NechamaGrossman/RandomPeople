using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RandomPeople.Data;
using RandomPeople.Web.Models;

namespace RandomPeople.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        string _connectionString;
        public PersonController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("GetPeople")]
        public List<Person> GetPeople()
        {
            PeopleRepository repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();

        }
        [HttpPost]
        [Route("AddRandomPerson")]
        public void AddRandomPerson(RandomPersonViewModel randomPersonViewModel)
        {
            PeopleRepository repo = new PeopleRepository(_connectionString);
            for (int i = 1; i <= randomPersonViewModel.Number; i++)
            {
                Person p = repo.CreateRandomPerson(randomPersonViewModel.MinAge, randomPersonViewModel.MaxAge);
                repo.AddPerson(p);
            }
        }
        [HttpPost]
        [Route("AddPerson")]
        public void AddPerson(Person p)
        {
            PeopleRepository repo = new PeopleRepository(_connectionString);
            repo.AddPerson(p);
        }
    }
}