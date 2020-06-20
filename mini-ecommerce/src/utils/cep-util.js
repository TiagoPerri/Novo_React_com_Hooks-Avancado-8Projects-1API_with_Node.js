export default function formatarCep(cep) {
  cep = cep.replace(/\D/g, '');
  if (cep.length > 8) {
    cep = cep.substring(0, 8);
  }
  if (cep.length > 5) {
    cep = cep.replace(/(\d{5})(.*)/, '$1-$2');
  }
  return cep;
}
