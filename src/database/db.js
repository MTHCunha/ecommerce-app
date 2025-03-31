import * as SQLite from 'expo-sqlite';

export async function getDbConnection() {
  const cx = await SQLite.openDatabaseAsync('dbEcommerce.db');
  return cx;
}

export async function createTable() {
  const query = `CREATE TABLE IF NOT EXISTS tbProdutosTeste
      (
          id text not null primary key,
          nome text not null          
      )`;
  var cx = await getDbConnection();
  await cx.execAsync(query);
  await cx.closeAsync();
};

export async function adicionaProduto(produto) {
  let dbCx = await getDbConnection();
  let query = 'insert into tbProdutosTeste (id, nome) values (?,?)';
  const result = await dbCx.runAsync(query, [produto.id, produto.nome]);
  await dbCx.closeAsync();
  return result.changes == 1;
}

export async function obtemTodosProdutos() {

  var retorno = []
  var dbCx = await getDbConnection();
  const registros = await dbCx.getAllAsync('SELECT * FROM tbProdutosTeste');
  await dbCx.closeAsync();

  for (const registro of registros) {
    let obj = {
      id: registro.id,
      nome: registro.nome
    }
    retorno.push(obj);
  }

  return retorno;
}

