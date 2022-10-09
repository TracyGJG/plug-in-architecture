import manifest from '../plugins/manifest.json' assert { type: 'json' };

buttons.innerHTML = Object.entries(manifest)
	.map(([btnText, { plugin }]) => {
		importModule(btnText, plugin);
		return createButton(btnText);
	})
	.join('');

buttons.addEventListener('click', evt => {
	divResult.textContent = manifest[evt.target.textContent].script(
		+num1.value,
		+num2.value
	);
});

function createButton(btnText) {
	return `<button data-func="${btnText}">${btnText}</button>`;
}

async function importModule(operationText, plugin) {
	console.log(`Loading ${operationText} plugin`);
	const module = await import(`../modules/${plugin}`);
	manifest[operationText].script = module.calc;
}
