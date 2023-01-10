const endpoint = "http://localhost:8080/v1/graphql";

module.exports = {
  schema: [
    {
      [endpoint]: {
        headers: {
          "x-hasura-admin-secret": "dev_admin_secret",
          "x-hasura-role": "landlord",
        },
      },
    },
  ],
  documents: ["./**/*.graphql.ts"],
  overwrite: true,
  generates: {
    ".src/owner/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
