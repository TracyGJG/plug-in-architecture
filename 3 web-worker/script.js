import manifest from '../plugins/manifest.json' assert { type: 'json' };

const WebWorker = new Worker('pluginRunner.js');

WebWorker.postMessage(manifest);

WebWorker.onmessage = e => {
	const result = e.data;
	divResult.textContent = result;
};

buttons.innerHTML = Object.keys(manifest).map(createButton).join('');

buttons.addEventListener('click', evt => {
	WebWorker.postMessage({
		method: evt.target.textContent,
		num1: +num1.value,
		num2: +num2.value,
	});
});

function createButton(btnText) {
	return `<button data-func="${btnText}">${btnText}</button>`;
}
