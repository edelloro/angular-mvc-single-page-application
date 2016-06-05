

using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest_AddUserToModel
    {

        [TestMethod]
        public void TestMethod_AddUser()
        {
            Contact newContact = new Contact();

            newContact.ContactName = "ERIC";
            newContact.EmailAddress = "eric@gmail.com";
            newContact.Message = "Hello World " + DateTime.Now.TimeOfDay.ToString();

            bool testresult = true;

            try
            {
                //create DBContext object
                using (var dbCtx = new ContactDatabaseEntities())
                {
                    //Add Student object into Students DBset
                    dbCtx.Contacts.Add(newContact);

                    // call SaveChanges method to save student into database
                    dbCtx.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                testresult = false;
            }

            Assert.AreEqual(testresult, true, "CONTACT RECORD SAVED");
        }



    }

}
