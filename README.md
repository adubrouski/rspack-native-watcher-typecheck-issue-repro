# rspack-repro

- [Rspack website](https://rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

# How to reproduce the issue with native watchers

1. Clone the repo
2. Install the dependencies (`yarn install`)
3. Run `yarn run dev:rspack`
4. You should see one TypeScript error in the terminal. Change 
   ```typescript
   const variable: string = 123;
   ``` 
   to
   ```typescript
   const variable: number = 123;
   ``` 
   in `./src/index.ts`. The TypeScript error will be fixed, but the same error will still be shown in the terminal.
5. Restart `yarn run dev:rspack`. The error will no longer be shown. Now change 
   ```typescript
   const variable: number = 123;
   ``` 
   to 
   ```typescript
   const variable: string = 123;
   ``` 
   in `./src/index.ts`. There should be a TypeScript error again, but it does not appear in the terminal.
6. Restart `yarn run dev:rspack`. You should now see one TypeScript error in the terminal.

> If we change experiments.nativeWatcher to `false` - steps 5 and 6 will not reproduce.

# Expected behavior

- After fixing the error (step 4), the error message should disappear from the terminal.
- After introducing a new error (step 5), the error message should immediately appear in the terminal without requiring a restart.

# Expected behavior

- After fixing the error (step 4), the error message still remains in the terminal.
- After introducing a new error (step 5), the error message does not appear until the process is restarted.
