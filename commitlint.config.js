module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "scope-enum": [
            2,
            "always",
            [
                // Base scopes
                "client",
                "server",
                "infra",

                // Angular scopes
                "core",
                "common",
                "shared",
                "router",
                "forms",
                "material",
                "animations",
                "pipes",
                "services",
                "components",
                "modules",
                "store",
                "assets",

                // Backend scopes (.NET etc.)
                "api",
                "database",
                "entities",
                "dto",
                "auth",
                "config",
                "logging",
                "middleware",

                // DevOps/Tooling
                "scripts",
                "tests",
                "build",
                "deps",
                "docs",
                "ci",
            ],
        ],
        "scope-empty": [2, "never"],
        "type-enum": [
            2,
            "always",
            ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "ci"],
        ],
    },
};
