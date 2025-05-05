
const form = document.getElementById('reservaForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const reserva = {
    nome: document.getElementById('nome').value,
    mesa: document.getElementById('mesa').value,
    horario: document.getElementById('horario').value,
    duracao: document.getElementById('duracao').value,
    data: document.getElementById('data').value,
    pessoas: document.getElementById('pessoas').value
  };

  let reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  reservas.push(reserva);
  localStorage.setItem('reservas', JSON.stringify(reservas));

  alert('Reserva salva com sucesso!');
  form.reset();
});
