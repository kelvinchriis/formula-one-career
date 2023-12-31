    var fk = sessionStorage.FK_PERFIL;
	if (fk != "null") {
        window.location = "perfil.html"
    } 


    document.getElementById('foto').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('img-user').style.backgroundImage = `url('${event.target.result}')`;
            };
            reader.readAsDataURL(file);
        }
    });

    function cadastrar() {
        botao.style.display = "none";
        onlo.style.display = "block";

        username = inputUsername.value
      
        var formData = new FormData();
        formData.append('foto', foto.files[0])
        formData.append('username', inputUsername.value)
        formData.append('nacionalidade', inputNacionalidade.value)
        formData.append('nasc', inputDtNasc.value)
        formData.append('numero', inputNumero.value)
        formData.append('biografia', inputBiografia.value)
        formData.append('equipe', escuderia)
        formData.append('carro', carro)
        formData.append('pista', pista)
        formData.append('piloto', piloto);
      
        if (
          inputUsername.value === "" ||
          inputNacionalidade.value === "" ||
          inputDtNasc.value === "" ||
          inputNumero.value === "" ||
          inputBiografia.value === "" ||
          escuderia === "" ||
          carro === "" ||
          pista === "" ||
          piloto === ""
        ) {
          return false;
        }
      
        fetch("/perfil/cadastrar", {
          method: "POST",
          body: formData,
        })
          .then(function (resposta) {
            console.log("resposta: ", resposta);
      
            if (resposta.ok) {
              pegarIdPerfil(username);
            } else {
              throw "Houve um erro ao tentar realizar o cadastro!";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
      
        return false;
      }

    function pegarIdPerfil(username) {
        fetch(`perfil/buscar/${username}`)
            .then(response => {
                if (response.ok) {
                    response.json().then(json => {
                        console.log(JSON.stringify(json));
                        sessionStorage.ID_PERFIL = json.id_perfil;
                    });
                    setTimeout(() => {
                        setFkPerfil()
                    }, 1000)             
                } else{
                    throw new Error('Erro ao consultar o ID');
                }
            })
            .catch(error => {
                // Lidar com erros aqui
                console.error('Ocorreu um erro:', error);
            });
    }

    function setFkPerfil() {
        fetch(`/perfil/editar/${sessionStorage.ID_USUARIO}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fk_perfil: sessionStorage.ID_PERFIL       
            })
        }).then(function (resposta) {

            if (resposta.ok) {
                sessionStorage.FK_PERFIL = sessionStorage.ID_PERFIL
                window.location = "perfil.html"
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
