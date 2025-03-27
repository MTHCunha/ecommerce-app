import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ecommerce.db');

export const setupDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NULL,
        sale INTEGER NOT NULL, 
        image TEXT
        );`,
      [],
      () => console.log('Tabela criada com sucesso'),
      (_, error) => console.log('Erro ao criar tabela', error)
    );
  });
};

export default db;
