export function formatarCpf(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length > 11) {
    cpf = cpf.substring(0, 11);
  }
  switch (cpf.length) {
    case 4:
    case 5:
    case 6:
      cpf = cpf.replace(/(\d{3})(.*)/, '$1.$2');
      break;
    case 7:
    case 8:
    case 9:
      cpf = cpf.replace(/(\d{3})(\d{3})(.*)/, '$1.$2.$3');
      break;
    case 10:
    case 11:
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(.*)/, '$1.$2.$3-$4');
      break;
    default:
      break;
  }
  return cpf;
}

export function validarCpf(cpf) {
	if (!cpf) {
		return false;
	}
	cpf = cpf.replace(/\D/g, '');
	if (cpf.length < 11) {
		return false;
	}
	let soma = 0;
    let resto;
  	if (cpf === '00000000000') {
  		return false;
  	}
  	for (let i=1; i<=9; i++) {
  		soma = soma + parseInt(cpf.substring(i-1, i)) * (11-i);
  	}
  	resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
    	resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10)) ) {
    	return false;
    }
  	soma = 0;
    for (let i = 1; i <= 10; i++) {
    	soma = soma + parseInt(cpf.substring(i-1, i)) * (12-i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
    	resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11) )) {
    	return false;
    }
    return true;
}
