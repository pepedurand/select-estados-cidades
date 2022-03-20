function atualizaCidades() {
    let cidadesListadas = document.getElementById("cidade");
    
    while (cidadesListadas.length) {
    cidadesListadas.remove(0);
    }
}

function gerarCidades() {
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade");
    let option = "";
    
    if (estado == "") {
        atualizaCidades();
    }
    
    if (estado == "RJ") {
        atualizaCidades();

      option = document.createElement("option");
      option.value = "1";
      option.text = "Rio de Janeiro"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "2";
      option.text = "Niterói"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "3";
      option.text = "Vassouras"; 
      cidade.add(option);
      
      option = document.createElement("option");
      option.value = "3";
      option.text = "Rio das Ostras"; 
      cidade.add(option);    
    }

    if (estado == "PR") {
        atualizaCidades();

      option = document.createElement("option");
      option.value = "1";
      option.text = "Curitiba"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "2";
      option.text = "Londrina"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "3";
      option.text = "Maringá"; 
      cidade.add(option);                  
    }    


    if (estado == "SP") {
        atualizaCidades();

      option = document.createElement("option");
      option.value = "1";
      option.text = "São Paulo"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "2";
      option.text = "Campinas"; 
      cidade.add(option);  

      option = document.createElement("option");
      option.value = "3";
      option.text = "Guarulhos"; 
      cidade.add(option);                  
    }        

  }


  