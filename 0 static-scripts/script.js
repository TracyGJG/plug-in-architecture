function createButton(btnText, btnFunction) {
	const buttonElement = document.createElement('button');
	buttonElement.textContent = btnText;
	buttonElement.addEventListener(
		'click',
		() => (divResult.textContent = btnFunction(+num1.value, +num2.value))
	);
	buttons.appendChild(buttonElement);
}
