package com.anotacoes.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.anotacoes.models.Anotacao;
import com.anotacoes.services.ConexaoPostgreSQL;

public class AnotacaoDAO {

    public ArrayList<Anotacao> listar() throws SQLException {
        ArrayList<Anotacao> vetAnotacao = new ArrayList<>();
        String sql = "select * FROM anotacao ORDER BY data ASC;";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        ResultSet rs = instrucaoSQL.executeQuery();
        while (rs.next()) {
            Anotacao p = new Anotacao();

            p.setId(rs.getInt("id"));
            p.setTitulo(rs.getString("titulo"));
            p.setData(rs.getDate("data"));
            p.setHora(rs.getTime("hora"));
            p.setDescricao(rs.getString("descricao"));
            p.setCor(rs.getString("cor"));
            p.setLixeira(rs.getBoolean("lixeira"));

            vetAnotacao.add(p);
        }
        instrucaoSQL.close();
        connection.close();
        return vetAnotacao;
    }

    public boolean inserir(Anotacao anotacao) throws SQLException {
        String sql = "INSERT INTO anotacao (titulo, data, hora, descricao, cor) VALUES (?,?,?,?,?);";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        instrucaoSQL.setString(1, anotacao.getTitulo());
        instrucaoSQL.setDate(2, anotacao.getData());
        instrucaoSQL.setTime(3, anotacao.getHora());
        instrucaoSQL.setString(4, anotacao.getDescricao());
        instrucaoSQL.setString(5, anotacao.getCor());
        boolean rs;
        
        try {
            rs = instrucaoSQL.execute();
            
        } catch (Exception e) {
            System.out.println("erro: " + e);
            return false;
            
        }

        instrucaoSQL.close();
        connection.close();

        return true;

    }

    public boolean deletar(int id) throws SQLException {

        String sql = "DELETE from anotacao WHERE id = ?;";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        instrucaoSQL.setInt(1, id);
        int resultado = instrucaoSQL.executeUpdate();
        instrucaoSQL.close();
        connection.close();
        return resultado == 1;
    }

    public boolean editar(Anotacao a, int parseInt) throws SQLException {
        String sql = "UPDATE anotacao SET titulo = ?, data = ?, hora = ?, descricao = ?, cor = ? WHERE id = ?";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        instrucaoSQL.setString(1, a.getTitulo());
        instrucaoSQL.setDate(2, a.getData());
        instrucaoSQL.setTime(3, a.getHora());
        instrucaoSQL.setString(4, a.getDescricao());
        instrucaoSQL.setString(5, a.getCor());
        instrucaoSQL.setInt(6, parseInt);


        int resultado = instrucaoSQL.executeUpdate();
        instrucaoSQL.close();
        connection.close();
        return true;
    }

    public Anotacao pegarPorId(int parseInt) throws SQLException {
        Anotacao a = new Anotacao();
        String sql = "SELECT * FROM anotacao WHERE id = ?;";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        instrucaoSQL.setInt(1, parseInt);
        ResultSet rs = instrucaoSQL.executeQuery();

        if(rs.next()) {
            a.setId(rs.getInt("id"));
            a.setTitulo(rs.getString("titulo"));
            a.setData(rs.getDate("data"));
            a.setHora(rs.getTime("hora"));
            a.setDescricao(rs.getString("descricao"));
            a.setCor(rs.getString("cor"));
        }
        
        instrucaoSQL.close();
        connection.close();
        return a;
    }

    public boolean moverParaLixeira(int id) throws SQLException {
        String sql = "UPDATE anotacao SET lixeira = true WHERE id = ?;";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        instrucaoSQL.setInt(1, id);
        int resultado = instrucaoSQL.executeUpdate();
        instrucaoSQL.close();
        connection.close();
        return resultado == 1;
    }

        public boolean tirarDaLixeira(int id) throws SQLException {
        String sql = "UPDATE anotacao SET lixeira = false WHERE id = ?;";
        Connection connection = new ConexaoPostgreSQL().getConexao();

        PreparedStatement instrucaoSQL = connection.prepareStatement(sql);
        instrucaoSQL.setInt(1, id);
        int resultado = instrucaoSQL.executeUpdate();
        instrucaoSQL.close();
        connection.close();
        return resultado == 1;
    }
    
}