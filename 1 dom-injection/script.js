import manifest from '../plugins/manifest.json' assert { type: 'json' };

buttons.innerHTML = Object.entries(manifest)
	.map(([btnText, { plugin }]) => {
		insertDomScript(btnText, plugin);
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

function insertDomScript(operationText, plugin) {
	console.log(`Loading ${operationText} plugin`);
	const scriptElement = document.createElement('script');
	scriptElement.async = true;
	scriptElement.onload = () => {
		console.log(`${operationText} script loaded`);
		manifest[operationText].script = calc;
	};
	scriptElement.src = `../plugins/${plugin}`;
	document.body.appendChild(scriptElement);
}
