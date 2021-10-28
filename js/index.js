(function () {
    const clockInHeader = document.querySelector('.headerClock');
    setInterval( () => clockInHeader.innerText = new Date().toLocaleTimeString(), 
     1000 );
})();

