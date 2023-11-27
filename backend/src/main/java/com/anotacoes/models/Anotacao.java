package com.anotacoes.models;


import java.sql.Date;
import java.sql.Time;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Anotacao {
    private int id;
    private String titulo;
    private Date data;
    private Time hora;
    private String descricao;
    private String cor;
    private boolean lixeira;

    @Override
    public String toString() {
        return "Anotacao [id=" + id + ", titulo=" + titulo + ", data=" + data + ", hora=" + hora + ", descricao="
                + descricao + ", cor=" + cor + ", lixeira=" + lixeira + "]";
    }

    public Anotacao() {
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

    public boolean isLixeira() {
        return lixeira;
    }

    public void setLixeira(boolean lixeira) {
        this.lixeira = lixeira;
    }

    
    
}
