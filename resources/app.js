import ExampleComponent from './components/ExampleComponent';
import AnotherExampleComponent from './components/AnotherExampleComponent';

window.vueApp = new Vue({
	el: '#app',
	template: '<div><ExampleComponent/><AnotherExampleComponent /></div>',
	components: {
		ExampleComponent,
		AnotherExampleComponent
	}
});
