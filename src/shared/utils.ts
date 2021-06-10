export function retornaValorEmReal(valor: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
};

export function retornaDataSemHora(data: string) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
}

export function retirarLetras(rake: string) {
    return rake.replace(/[^0-9]/, '');
}