# Parametrized Tests and Fixtures for Conduit

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands: `npm ci` and `npx playwright install`.

## Task

1. Review the `addAllureTestHierarchy` fixture in the `tests/_fixtures/fixturesGeneric.ts` file to ensure you understand how it works.
2. Trigger the tests with `npx playwright test`.
3. Generate the report using `allure serve allure-results`.
4. Check that hierarchy in the **Suites** tab. Not that all the `parentSuite` and `suite` are automatically added to the tests with the help of the `addAllureTestHierarhy` fixture. 
5. Create new tests under the `userSettings` folder, and add subfolders if required:
    - *Update username from settings*
    - *Update email from settings*
    - *Update password from settings*
    - *Add profile picture URL from settings*
    - *Add short bio from settings*
6. Create a new test under the `auth` folder, and add subfolders if required:
    - *Log out user*
7. Create an `auto worker-scope` fixture to delete the `allure-results` folder before test execution.
8. Trigger the tests with `npx playwright test`.
9. Generate the report using `allure serve allure-results`.
10. Check that new tests are automatically placed correctly within the hierarchy in the **Suites** tab.

## Task Reporting

1. Add and commit all your updates. 
2. Push the code to the origin.
3. Create PR for your changes. 
4. Fix all the suggestions from the code review until PR is approved.  
