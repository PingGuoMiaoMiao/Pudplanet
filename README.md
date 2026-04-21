# NetflixClone

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages. The deployment workflow is located in `.github/workflows/deploy.yml`.

### How it works:

1. **Automatic Deployment**: When you push to the `main` branch, GitHub Actions automatically:
   - Builds the Angular app with the correct base-href (`/Pudplanet/`)
   - Deploys the built files to GitHub Pages

2. **Manual Deployment**: You can also trigger deployment manually from the GitHub Actions tab.

3. **Access the deployed site**: Once deployed, your site will be available at:
   ```
   https://pingguomiaomiao.github.io/Pudplanet/
   ```

### Local Testing:

To test the build locally with the same configuration as GitHub Pages:
```bash
pnpm run build -- --base-href /Pudplanet/
```

The built files will be in `dist/netflix-clone/browser/`.

### Important Notes:

- The `404.html` file is included for client-side routing support on GitHub Pages
- The base-href is set to `/Pudplanet/` to match the repository name
- Make sure GitHub Pages is enabled in your repository settings (Settings → Pages → Source: GitHub Actions)
