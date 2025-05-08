# Allure & User Settings tests for Conduit

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running `git checkout -b task_solution`.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`

## Task

1. Review the `addAllureTestHierarchy` fixture in the `tests/_fixtures/fixturesGeneric.ts` file to ensure you understand how it works.
2. Run the tests with `npx playwright test`.
3. Generate a report using `allure serve allure-results`.
4. Read the report, looking at the hierarchy in the **Suites** tab. Note that all the `parentSuite` and `suite` are automatically added to the tests with the help of the `addAllureTestHierarhy` fixture.
5. Create the following new tests under the `userSettings` folder, adding sub-folders if required:
    - *Update username from settings*
    - *Update email from settings*
    - *Update password from settings*
    - *Add profile picture URL from settings*
    - *Add short bio from settings*
6. Create a single new test in the auth folder, adding subfolders if required:
    - *Log out user*
7. Create an `auto worker-scope` fixture, so that the the `allure-results` folder is deleted before the tests are executed.
8. Run the tests with `npx playwright test`.
9. Generate the report using `allure serve allure-results`.
10. Read the report. Note that new tests are automatically placed correctly within the hierarchy in the **Suites** tab.   

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
