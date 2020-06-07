/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        switch(operation){
            case 'addition':
                
                let add = a+b;

                alert(add);
                
                break;

            case 'substraction':
            
                let sous = a-b;

                alert(sous);

                break;

            case 'multiplication':
             
                let multi = a*b;

                alert(multi);

                break;

            case 'division':

                let divi= a/b;

                alert(divi);
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
