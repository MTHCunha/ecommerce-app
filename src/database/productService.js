import db from './db';

export const addProduct = (name, price, description, sale, image) => {
    db.transaction((tx) => {
        tx.executeSql(
        'INSERT INTO products (name, price, description, sale, image) VALUES (?, ?, ?, ?, ?)',
        [name, price, description, sale, image],
        (_, result) => console.log('Produto inserido', result),
        (_, error) => console.log('Erro ao inserir produto', error)
        );
    });
};

export const getProducts = (callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM products',
        [],
        (_, { rows }) => callback(rows._array),
        (_, error) => console.log('Erro ao buscar produtos', error)
      );
    });
};

export const removeProduct = (id) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM products WHERE id = ?',
        [id],
        (_, result) => console.log('Produto removido', result),
        (_, error) => console.log('Erro ao remover produto', error)
      );
    });
};

export const updateProduct = (id, name, price, image) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?',
        [name, price, image, id],
        (_, result) => console.log('Produto atualizado', result),
        (_, error) => console.log('Erro ao atualizar produto', error)
      );
    });
};
  