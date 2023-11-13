# Use the official .NET SDK image
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY *.sln .
COPY Application/*.csproj ./Application/
COPY DataAccessLayer/*.csproj ./DataAccessLayer/
COPY Types/*.csproj ./Types/
RUN dotnet restore

# Copy everything else and build
COPY . .
WORKDIR /app/Application
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app
COPY --from=build /app/Application/out ./
ENTRYPOINT ["dotnet", "Application.dll"]
