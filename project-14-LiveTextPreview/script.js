


  const textInput = document.querySelector("#textInput");
  const preview = document.querySelector("#preview");

        textInput.addEventListener("input", ()=> {
            const text = textInput.value.trim()

            if (text === "") {
                preview.textContent = "Type Something...";
            } else {
                preview.textContent = text;
            }
        });



    
     







