import manifest from '../plugins/manifest.json' assert { type: 'json' };

Object.entries(manifest).forEach(async ([btnText, { plugin }]) => {
	console.log(`Loading ${btnText} plugin`);
	const module = await import(`../modules/${plugin}`);
	manifest[btnText].script = module.default;
	buttons.innerHTML += `<button data-func="${btnText}">${btnText}</button>`;
});

buttons.addEventListener('click', evt => {
	divResult.textContent = manifest[evt.target.textContent].script(
		+num1.value,
		+num2.value
	);
});
