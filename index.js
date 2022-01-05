const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

//config
    // template 
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: false,}
        }));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json())

// Rotas

app.get("/posts", (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render("home.handlebars", {posts: posts})
    })
})

app.get("/cadastro", (req, res) => {
    res.render('formulario.handlebars')
})

app.post("/add", (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect("/posts")
    }).catch(error => {
        res.send(`Error: ${error}`)
    })
})

app.get("/del/:id", (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() => {
        res.send("Deletada com sucesso")
    }).catch(erro => {
        res.send("Deu merda, kkkkkk")
    })
})

app.listen(8080, () => {
    console.log("Server on in http://localhost:8080");
})