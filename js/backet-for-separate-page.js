

 
    
    const buttonBig = document.querySelector('.button-big');
    const orangeCircle = document.querySelector('.orange-circle');
    
    buttonBig.addEventListener('click', (e) => {
        orangeCircle.innerHTML = `
        <div class="orange-circle"><span>${count}</span></div>
        `;
    }
