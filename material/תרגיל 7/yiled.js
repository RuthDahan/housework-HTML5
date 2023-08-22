function* myGenerator() { 
        let sum =num1=num2= 1;
        yield num1;
        while (true) {
            yield sum;
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
    
    }
    
    let countr = 0;
    for (var n of myGenerator()) {
        document.body.innerHTML += `<p> <b>${countr}:</b> ${n}</p>`;
        countr++;
        if (countr == 20) {
            break;
        }
    }
