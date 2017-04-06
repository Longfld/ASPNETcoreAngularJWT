using System;
using System.Collections.Generic;

 namespace ASPNETCoreAngularJWT
{
 public static class UserStorage
    {
        public static List<User> Users { get; set; } = new List<User> {
            new User {ID=Guid.NewGuid(),Username="user1",Password = "user1psd", Fname="user1", Lname="Lname1" },
            new User {ID=Guid.NewGuid(),Username="user2",Password = "user2psd", Fname="user2", Lname="Lname2"  },
            new User {ID=Guid.NewGuid(),Username="user3",Password = "user3psd", Fname="user3", Lname="Lname3"  }
        };

    }
}