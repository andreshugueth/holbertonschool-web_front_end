const globalVariable = "Welcome";

function outer(params) {
    alert(globalVariable);
    const course = "Holberton";

    new function inner() {
        alert(`${globalVariable} ${course}`);
        const exclamation = "!";

        new function inception() {
            alert(`${globalVariable} ${course} ${exclamation}`);
        };
    };
}
