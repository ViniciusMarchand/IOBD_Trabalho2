package com.anotacoes;

import static spark.Spark.*;
import com.google.gson.Gson;
import spark.Filter;
import com.anotacoes.DAO.AnotacaoDAO;
import com.anotacoes.models.Anotacao;
public final class App {

    public static void main(String[] args) {
        Gson gson = new Gson();
        AnotacaoDAO anotacaoDAO = new AnotacaoDAO();        


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
            Anotacao a = gson.fromJson(req.body(), Anotacao.class);
            return gson.toJson(anotacaoDAO.inserir(a));
        });

        delete("/Anotacao/:id", (req, res) -> anotacaoDAO.deletar(Integer.parseInt(req.params(":id"))));

        put("/Anotacao/:id", (req, res) -> {
            Anotacao a = gson.fromJson(req.body(), Anotacao.class);
            return anotacaoDAO.editar(a, Integer.parseInt(req.params(":id")));
        });
    }
}
