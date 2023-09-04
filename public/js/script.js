const tabelaProjetos = document.getElementById('tabela-projetos').getElementsByTagName('tbody')[0];

fetch('http://localhost:5487/projetos')
    .then(response => response.json())
    .then(projetos => {
        projetos.forEach(projeto => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
                <td>${projeto.id}</td>
                <td><img src="${projeto.imagem}"></td>
                <td>${projeto.nome}</td>
                <td>${projeto.descricao}</td>
                <td><a href="${projeto.link}" target="_blank" >${projeto.link}</a></td>

            `;
            tabelaProjetos.appendChild(linha);
        })

    })
    .catch(error => {
        console.error('Erro ao buscar projetos:', error)

    })
