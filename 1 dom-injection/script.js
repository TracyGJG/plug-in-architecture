import manifest from '../plugins/manifest.json' assert { type: 'json' };

buttons.innerHTML = Object.entries(manifest)
	.map(([btnText, { plugin }]) => {
		const scriptElement = document.createElement('script');
		scriptElement.async = true;
		scriptElement.onload = () => {
			console.log(`${btnText} script loaded`);
			manifest[btnText].script = calc;
		};
		scriptElement.src = `../plugins/${plugin}`;
		document.body.appendChild(scriptElement);
		return `<button data-func="${btnText}">${btnText}</button>`;
	})
	.join('');

buttons.addEventListener('click', evt => {
	divResult.textContent = manifest[evt.target.textContent].script(
		+num1.value,
		+num2.value
	);
});
