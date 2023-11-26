package com.anotacoes.models;


import java.sql.Date;
import java.sql.Time;

public class Anotacao {
    private int id;
    @Override
    public String toString() {
        return "Anotacao [id=" + id + ", titulo=" + titulo + ", data=" + data + ", hora=" + hora + ", descricao="
                + descricao + ", cor=" + cor + "]";
    }
    private String titulo;
    private Date data;
    private Time hora;
    private String descricao;
    private String cor;

    public Anotacao(
        //int id, String titulo, Date data, Time hora, String descricao, String cor
        ) {
        // this.id = id;
        // this.titulo = titulo;
        // this.data = data;
        // this.hora = hora;
        // this.descricao = descricao;
        // this.cor = cor;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public Date getData() {
        return data;
    }
    public void setData(Date data) {
        this.data = data;
    }
    public Time getHora() {
        return hora;
    }
    public void setHora(Time hora) {
        this.hora = hora;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }

    
    
}
