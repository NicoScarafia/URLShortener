document.addEventListener('click', (e)=> {
   if(e.target.dataset.short) {
        const url = `http://localhost:4000/${e.target.dataset.short}`

        navigator.clipboard
            .writeText(url)
            .then(() => {
                console.log("Texto copiado al portapapeles");
            })
            .catch((error) => {
                console.log("No se pudo copiar el text", error);
            });
   }
})