import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'https://rickandmortyapi.com/api/episode';  // URL da sua API Rick and Morty

  const response = http.get(url);

  // Verifica se o status da resposta é 200
  check(response, {
    'status is 200': (r) => r.status === 200,
    'contains 5 episode': (r) => r.json().length === 5,
  });

  // Aguarda 1 segundo entre as requisições
  sleep(1);
}