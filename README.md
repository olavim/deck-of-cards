# deck-of-cards
Draw a random card from a deck. Suitable for drinking games.

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves app. HMR will be enabled in development.|
|`start:prod`|Same as `start` but overrides `NODE_ENV` to "production".|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`deploy`|Runs tests and compiles the application on success.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|

```
.
├── bin                      # Build/Start scripts
├── build                    # Build-related configuration (webpack)
├── config                   # Project configuration settings
├── server                   # Express application
│   └── main.js              # Server application entry point
└── src                      # Application source code
     ├── static              # Static assets (not imported anywhere in source code)
     └── styles              # Application-wide styles (generally settings)
```
