# ASPNETcoreAngularJWT

Here is very basic show case for jwt bearer token authorization, using angular as font end and ASP.NET Core as backend.
ASP.NET Core1.1 angular 4 with systemjs.

***********************************************************

(Why systemjs not webpack? Personal opinion: webpack just too complicated to use for any small size, simple application, I rather scarified efficient to let most programmers can read my example code)

**************************************************************************


Now you can stop google and find out how to do bear JWT token Authentication, it is simple!
 
At backend: MS$ provide middleware UseJwtBearerAuthentication for bear JWT token Authentication, so, things turns to be as simple as add the middleware at Startup.cs 

At frontend(angular in this case): save the token in sessionStorage, and when talking to backend, set header of http request as:

     let headers = new Headers({ 'Content-Type': 'application/json' });
     headers.append("Authorization", "Bearer " + token);

************************************************************
Angular in ASP.NET Core (VS2017 or csproj version)with JWT solution

after download, go to folder with file ASPNETCoreAngularJWT.csproj and run command:

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

**************************************************
For linux user, RSACryptoServiceProvider exists in .Net Core 2.0 or up, need to install .Net Core 2.0 Preview (or up) and point project TargetFramework to 2.0 by:

 1. install .Net Core 2.0 preview from here: https://www.microsoft.com/net/core/preview#linuxubuntu
 
 2. Open file ASPNETCoreAngularJWT.csproj, exists if tag TargetFramework exists change from: 
  
   netcoreapp1.1
   
   to:
   
   netcoreapp2.0







