function atualizaTotal() {  
    const forca = parseInt(document.getElementById('forca').value) || 0;  
    const defesa = parseInt(document.getElementById('defesa').value) || 0;  
    const sorte = parseInt(document.getElementById('sorte').value) || 0;  

    const total = forca + defesa + sorte;  
    document.getElementById('total').textContent = `Total de pontos: ${total}/10`;  

      
    if (total > 10) {  
        alert('Você não pode distribuir mais de 10 pontos!');  
        // Reverter a última ação  
        if (forca + defesa + sorte > 10) {  
            alert("Por favor, ajuste os valores para que a soma não ultrapasse 10 pontos.");  
            document.getElementById('forca').value = Math.max(0, forca - 1);  
            atualizaTotal();  
        }  
    }  
}  

function comecarAventura() {  
    const nome = document.getElementById('nome').value;  
    const forca = document.getElementById('forca').value;  
    const defesa = document.getElementById('defesa').value;  
    const sorte = document.getElementById('sorte').value;  

    if (!nome) {  
        alert('Por favor, digite o nome do personagem!');  
        return;  
    }  

    if (parseInt(forca) + parseInt(defesa) + parseInt(sorte) !== 10) {  
        alert('A soma dos pontos deve ser exatamente 10!');  
        return;  
    }  

    alert(`Aventura começando com ${nome}, Força: ${forca}, Defesa: ${defesa}, Sorte: ${sorte}!`);  
}  