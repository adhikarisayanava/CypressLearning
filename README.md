**Cypress Notes**

	• Test Automation Tool
	• Can test anything that runs on a web browser
	• Write tests in JavaScript or Typescript
	• Does not use Selenium(** to check difference between both**)
	• Features:
		○ Time Travel takes snapshots as your tests run
		○ Debuggability
		○ Automatic waits
		○ Consistent Results
		○ Cross Browser Testing
		○ Can do all types of tests like : unit, integration, e2e
	• Needs Node.js(runtime environment for running Javascript code outside of a web browser)
	• Open VS IDE: 
		○ npm init -y(creates package.json file, present in all node projects)
		○ npm install cypress
		○ npx cypress -v(to check version information)
		○ npx cypress verify : verify cypress is installed properly and is executable
		○ npx cypress open(to open cypress application)
	• Mocha is cypress test runner(inbuilt, no need to do anything)
	• Assertions in Cypress
		○ Implicit(built-in) : should(), and()
		○ Explicit(user has to mention) : assert(), expect()
	• To run tests from terminal: 
		○ npx cypress run(it runs on electron headless browser)
		○ npx cypress run -b firefox
		○ To run a particular test : npx cypress run -s .\cypress\e2e\spec.cy.js -b firefox
		○ To run from package.json file, in "scripts" section create like:
			§ "SayanavaCypressTests": "cypress run"
			§ And then from command line : npm run SayanavaCypressTests
	• Read file using fixture() method(****Check this more along with how to write to a file****)
![image](https://github.com/adhikarisayanava/CypressLearning/assets/159051601/8f26b965-fcab-4361-9908-3985c38b02ad)

