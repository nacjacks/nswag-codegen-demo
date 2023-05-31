# codegen-test

For post-build steps to work, please install nswag via npm https://www.npmjs.com/package/nswag

NuGet packages needed (already referenced in code)
- NSwag.AspNetCore
- NSwag.MSBuild
- Microsoft.AspNetCore.Authentication.JwtBearer

Additional packages needed for nswag CLI and NPM package creation
- yarn add nswag -g
- yarn add typescript –g
- yarn add @types/node --save-dev (needed in API project to generate types)
