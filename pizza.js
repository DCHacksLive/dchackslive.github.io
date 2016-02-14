function countChecked() {
	return(document.querySelectorAll('input[name="topping"]:checked').length);
}

function checkFullName() {
	var name = document.getElementById("name").value.replace(/^\s+|\s+$/g, '').split(" ");
	return(name.length <= 1);
}

function submitOrder() {
	if(countChecked() > 2) {
		alert("Too many toppings selected! Please select a maximum of two (2).");
	} else if(document.getElementById("order").value === "") {
		alert("Please give your order a name!");
	} else if(checkFullName()) {
		alert("Please provide your full name!");
	} else if(document.getElementById("code").value === "") {
		alert("Code not valid!");
	} else {
		window.confirm("Are you sure you would like to submit your order? Your order cannot be canceled or changed once submitted.");
	}
}