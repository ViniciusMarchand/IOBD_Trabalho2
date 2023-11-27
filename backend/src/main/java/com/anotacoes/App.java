package com.anotacoes;

import static spark.Spark.*;

import java.util.TimeZone;

import com.google.gson.Gson;
import spark.Filter;
import com.anotacoes.DAO.AnotacaoDAO;
import com.anotacoes.models.Anotacao;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.StdDateFormat;
public final class App {

    public static void main(String[] args) {
        Gson gson = new Gson();
        AnotacaoDAO anotacaoDAO = new AnotacaoDAO();        
        ObjectMapper objectMapper = new ObjectMapper();
     objectMapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
            objectMapper.setDateFormat(new StdDateFormat().withColonInTimeZone(true));
            objectMapper.setTimeZone(TimeZone.getDefault()); // Configura o fuso horário local


        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Request-Method", "GET, POST, PUT, DELETE, OPTIONS");
            response.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
        });

        get("/Anotacao", (req, res) -> gson.toJson(anotacaoDAO.listar()));

        get("/Anotacao/:id", (req, res) -> gson.toJson(anotacaoDAO.pegarPorId(Integer.parseInt(req.params(":id")))));

        post("/Anotacao", (req, res) -> {
            System.out.println(req.body());
            try {
                Anotacao a = objectMapper.readValue(req.body(), Anotacao.class);
                System.out.println(a.getData());
                return gson.toJson(anotacaoDAO.inserir(a));
            } catch (Exception e) {
                e.printStackTrace();
            }
            return "";
        });

        delete("/Anotacao/:id", (req, res) -> anotacaoDAO.deletar(Integer.parseInt(req.params(":id"))));

        put("/Anotacao/:id", (req, res) -> {
            // Anotacao a = gson.fromJson(req.body(), Anotacao.class);
            try {
                Anotacao a = objectMapper.readValue(req.body(), Anotacao.class);
                return anotacaoDAO.editar(a, Integer.parseInt(req.params(":id")));
            } catch (Exception e) {
                e.printStackTrace();
            }
            return "";
        });

        put("/MoverParaLixeira/:id", (req, res) -> anotacaoDAO.moverParaLixeira(Integer.parseInt(req.params(":id"))));
        
        put("/TirarDaLixeira/:id", (req, res) -> anotacaoDAO.tirarDaLixeira(Integer.parseInt(req.params(":id"))));


    }
}
