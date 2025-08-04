module.exports = {
    "*.{js,json,css,ts}": ["prettier --check"],
    "*.{cs,xaml}": ["dotnet format --verify-no-changes"],
};
