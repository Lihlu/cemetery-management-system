FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src
COPY ["src/CemeteryManagementSystem.Web.Host/CemeteryManagementSystem.Web.Host.csproj", "src/CemeteryManagementSystem.Web.Host/"]
COPY ["src/CemeteryManagementSystem.Web.Core/CemeteryManagementSystem.Web.Core.csproj", "src/CemeteryManagementSystem.Web.Core/"]
COPY ["src/CemeteryManagementSystem.Application/CemeteryManagementSystem.Application.csproj", "src/CemeteryManagementSystem.Application/"]
COPY ["src/CemeteryManagementSystem.Core/CemeteryManagementSystem.Core.csproj", "src/CemeteryManagementSystem.Core/"]
COPY ["src/CemeteryManagementSystem.EntityFrameworkCore/CemeteryManagementSystem.EntityFrameworkCore.csproj", "src/CemeteryManagementSystem.EntityFrameworkCore/"]
WORKDIR "/src/src/CemeteryManagementSystem.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/CemeteryManagementSystem.Web.Host", "src/CemeteryManagementSystem.Web.Host"]
COPY ["src/CemeteryManagementSystem.Web.Core", "src/CemeteryManagementSystem.Web.Core"]
COPY ["src/CemeteryManagementSystem.Application", "src/CemeteryManagementSystem.Application"]
COPY ["src/CemeteryManagementSystem.Core", "src/CemeteryManagementSystem.Core"]
COPY ["src/CemeteryManagementSystem.EntityFrameworkCore", "src/CemeteryManagementSystem.EntityFrameworkCore"]
WORKDIR "/src/src/CemeteryManagementSystem.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "CemeteryManagementSystem.Web.Host.dll"]
