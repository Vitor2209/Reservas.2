
function carregarReservas() {
  const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  const lista = document.getElementById('listaReservas');
  const filtroNome = document.getElementById('filtroNome').value.toLowerCase();
  const filtroData = document.getElementById('filtroData').value;

  lista.innerHTML = '';

  reservas.forEach((reserva, index) => {
    const nomeMatch = reserva.nome.toLowerCase().includes(filtroNome);
    const dataMatch = filtroData === '' || reserva.data === filtroData;

    if (nomeMatch && dataMatch) {
      const div = document.createElement('div');
      div.className = 'reserva';
      div.innerHTML = `
        <strong>Cliente:</strong> ${reserva.nome}<br>
        <strong>Mesa:</strong> ${reserva.mesa}<br>
        <strong>Horário:</strong> ${reserva.horario}<br>
        <strong>Duração:</strong> ${reserva.duracao} minutos<br>
        <strong>Data:</strong> ${reserva.data}<br>
        <strong>Pessoas:</strong> ${reserva.pessoas}<br>
        <button onclick="cancelarReserva(${index})">Cancelar</button>
      `;
      lista.appendChild(div);
    }
  });
}

function cancelarReserva(index) {
  let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  reservas.splice(index, 1);
  localStorage.setItem('reservas', JSON.stringify(reservas));
  carregarReservas();
}

function voltar() {
  window.location.href = 'index.html';
}

carregarReservas();
