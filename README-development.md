# Oracle Cloud Infrastructure SDK for TypeScript and JavaScript Development

## Getting Started

The following instructions assume that you have [typescript](https://www.npmjs.com/package/typescript) [node](https://nodejs.org) installed.

Now clone the repository to your machine:

```
git clone https://github.com/oracle/oci-typescript-sdk.git
cd oci-typescript-sdk
```

### SDK Dependencies

```
# npm install the dependencies
npm install
```

This will install all the dependencies of the SDK into your workspace.

### Audit allowlist

`npm run check-vulnerabilities` keeps npm audit false-positive exclusions in
`scripts/audit-allowlist.js`.

To add an exclusion, add one top-level package entry with the allowed SDK paths
for that finding and any related findings npm audit emits with it.

### Building

```
# compile the TypeScript files into JavaScript files
npm run build
```
