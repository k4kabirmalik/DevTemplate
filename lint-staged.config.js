module.exports = {
    "*.{js,json,css,ts}": ["prettier --write"],
    "*.{cs,xaml}": ["dotnet format --include"],
};
