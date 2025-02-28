# Practice task: Parametrized tests and fixtures for Conduit

## Preparation:
1. Open the forked repo in VSCode.
2. Create a new branch: git checkout -b added_article_test
3. Run the installation commands `npm ci` & `npx playwright install`.

## Main task:
1. Review the `addAllureTestHierarchy` fixture under the `tests/_fixtures/fixturesGeneric.ts` file. Make sure you understand how it works.
2. Trigger the tests with `npx playwright test`.
3. Generate the report using `allure serve allure-results`.
4. Check that hierarchy in the `Suites` tab. Not that all the `parentSuite` and `suite` are automatically added to the tests with the help of the `addAllureTestHierarhy` fixture. 
5. Create new tests under the `userSettings` folder, add subfolders if required:
- *Update username from settings*
- *Update email from settings*
- *Update password from settings*
- *Add profile picture URL from settings*
- *Add short bio from settings*
6. Create new test under the `auth` folder, add subfolders if required:
- *Log out user*
7. Create an `auto worker-scope` fixture to delete the `allure-results` folder before test execution.
8. Trigger the tests with `npx playwright test`.
9. Generate the report using `allure serve allure-results`.
10. Check that new tests are automatically placed correctly within the hierarchy in the `Suites` tab.


## Task Reporting: 
1. Add and commit all your updates. 
2. Push the code to the origin.
3. Create PR for your changes. 
4. Fix all the suggestions from the Code review until PR is approved.  

