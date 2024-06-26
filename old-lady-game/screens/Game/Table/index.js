import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        {tableState.slice(0, 3).map((cellState, id) => (
          <Cell
            key={id}
            onClick={onCellClicked}
            id={id}
            cellState={cellState}
          />
        ))}
      </View>
      <View style={styles.row}>
        {tableState.slice(3, 6).map((cellState, id) => (
          <Cell
            key={id + 3}
            onClick={onCellClicked}
            id={id + 3}
            cellState={cellState}
          />
        ))}
      </View>
      <View style={styles.row}>
        {tableState.slice(6, 9).map((cellState, id) => (
          <Cell
            key={id + 6}
            onClick={onCellClicked}
            id={id + 6}
            cellState={cellState}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    width: "60%",
    aspectRatio: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Table;
