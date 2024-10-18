import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const url = 'https://rickandmortyapi.com/api/character';  // URL da sua API Rick and Morty

  const response = http.get(url);

  // Verifica se o status da resposta é 200
  check(response, {
    'status is 200': (r) => r.status === 200,
    'contains 20 character': (r) => r.json().length === 20,
  });

  // Aguarda 1 segundo entre as requisições
  sleep(1);
}