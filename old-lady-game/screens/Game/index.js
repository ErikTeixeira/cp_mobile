import React, { useState } from 'react';
import { View } from 'react-native';
import InvalidMoveDialog from '../../components/InvalidMoveDialog';
import EndGameDialog from '../../components/EndGameDialog';
import { initialTableState, fullTable, hasWinner, isValidPlay } from './gameRules';
import GameTable from './Table';
import TurnRecorder from './TurnRecorder';

const PLAYERS_NAME = ['Jogador 1', 'Jogador 2'];

const GameScreen = ({ navigation }) => {
  const [invalidMoveDialog, setInvalidMoveDialog] = useState(false);
  const [endGameDialog, setEndGameDialog] = useState(false);
  const [gameEnded, setGameEnded] = useState(false); // State para controlar se o jogo terminou
  const [activePlayer, setActivePlayer] = useState(1);
  const [table, setTable] = useState(initialTableState);

  const endGameText = hasWinner(table) ? `${PLAYERS_NAME[activePlayer - 1]} ganhou!` : fullTable(table) ? 'Empate!' : '';

  const resetGame = () => {
    setTable(initialTableState);
    setActivePlayer(1);
    setEndGameDialog(false); // Resetando o estado do dialog de fim de jogo
    setGameEnded(false); // Reiniciando o estado do jogo terminado
  }

  const onCellClicked = (cellId) => {
    if (!gameEnded) { // Verificar se o jogo não terminou
      if (isValidPlay(cellId, table)) {
        const newTable = [...table];
        newTable[cellId] = activePlayer;
        setTable(newTable);

        if (hasWinner(newTable)) {
          setEndGameDialog(true);
          setGameEnded(true); // Marcar o jogo como terminado
        } else if (fullTable(newTable)) {
          setEndGameDialog(true);
          setGameEnded(true); // Marcar o jogo como terminado
        } else {
          setActivePlayer(activePlayer === 1 ? 2 : 1);
        }
      } else {
        setInvalidMoveDialog(true); 
      }
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <TurnRecorder playerName={PLAYERS_NAME[activePlayer - 1]} />
      <GameTable onCellClicked={onCellClicked} tableState={table} />
      <EndGameDialog
        isOpen={endGameDialog}
        resultText={endGameText}
        onClickYes={resetGame}
        onClickNo={() => navigation.navigate('Home')}
      />
      <InvalidMoveDialog
        text="Jogada inválida"
        isOpen={invalidMoveDialog}
        onClickClose={() => setInvalidMoveDialog(false)} 
      />
    </View>
  );
}

export default GameScreen;
