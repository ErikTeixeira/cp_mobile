export const initialTableState = Array(9).fill(0);
// Estados possíveis: 0 -> vazio; 1 -> peça do jogador 1; 2 -> peça do jogador 2

// Se a célula está vazia, a jogada é válida
export const isValidPlay = (selectedCell, tableState) => tableState[selectedCell] === 0;

// O tabuleiro está cheio quando não há espaços vazios
export const fullTable = (tableState) => !tableState.some(cell => cell === 0);

export const hasWinner = (tableState, lastCellId) => {
    // Completar esse método
    //
    // Dica: Não é necessário retornar quem foi o vencedor pois
    // só é possível o vencedor ter sido o último a jogar
    //
    // Dica2: Usando o lastCellId podemos verificar apenas
    // as combinações envolvendo a última jogada (opcional)
    //
    // Dica3: Cuidado, 3 espaços vazios NÃO configuram um vencedor
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let line of lines) {
        const [a, b, c] = line;
        if (
            tableState[a] !== 0 &&
            tableState[a] === tableState[b] &&
            tableState[a] === tableState[c]
        ) {
            return true;
        }
    }

    return false;
};
