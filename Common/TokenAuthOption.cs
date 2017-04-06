using Microsoft.IdentityModel.Tokens;
using System;


 
 namespace ASPNETCoreAngularJWT
{
  public class TokenAuthOption
    {
        public static string Audience { get; } = "MyAudience";
        public static string Issuer { get; } = "MyIssuer";
        public static RsaSecurityKey Key { get; } = new RsaSecurityKey(RSAKeyHelper.GenerateKey());
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);

        public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(40);
        public static string TokenType { get; } = "Bearer"; 
    }
   
}
