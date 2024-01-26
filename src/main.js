import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'James Butler',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Automated workflow to continuously working on and releasing changes.'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'AWS Codepipeline, maybe?',
		// What do you want to learn in this workshop? 
		expectations: [
			'How to set up a CI/CD workflow/automation.'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'hiking',
			'watching movies',
			'cooking'
		]
	}
});
