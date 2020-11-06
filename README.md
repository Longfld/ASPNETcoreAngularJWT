# ASPNETcoreAngularJWT

Here is very basic show case for jwt bearer token authorization, using angular as front end and ASP.NET Core as backend.
ASP.NET Core3.1 angular7.2.1 with systemjs.
(Make sure you have dotnet core 3.1 + and Angular7.2.1 installed)

***********************************************************

(Why systemjs not webpack? Personal opinion: webpack just too complicated to use for any small size, simple application, I rather scarified efficient to let most programmers can read my example code)

**************************************************************************


Now you can stop google and find out how to do bear JWT token Authentication, it is simple!
 
At backend: MS$ provide middleware AddAuthentication().AddJwtBearer() for bear JWT token Authentication, so, things turns to be as simple as add the middleware at Startup.cs 

At frontend(angular in this case): save the token in sessionStorage, and when talking to backend, set header of http(https for production) request as:

     let headers = new HttpHeaders()
                        .set('Content-Type','application/json')
                        .set("Authorization", "Bearer " + token);

************************************************************
Angular & material 7.2.1 in ASP.NET Core 3.1 (VS2019 or csproj version)with JWT solution.

Make sure:

ASP.NET CORE 3.1 has been installed, if not, get from here:
  https://www.microsoft.com/net/download/core
  
nodejs has been installed, if not, get from https://nodejs.org/en/download/

after download this repositiry, go to folder with file ASPNETCoreAngularJWT.csproj and run command:

    >dotnet restore
   
    >npm install
   
    >npm start
   
Finally start dotnet and browser http://localhost:5000 by

    >dotnet run
   
And do not forget to run "npm start" after modify any typescript files.

You can run this for angular compile and dotnet run

    >npm run runall

Also it can be opened by both Visual Studio 2017 or Visual Studio Code.
After open by VS2017 and before run as debug, make sure project-> property -> Debug and App URL ="http://localhost:5000" and rebuild again before start to debug





