var listaServicos = [
    {
        "id": 1,
        "nome": "Banho",
        "preco": "30,00",
        "descricao": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
    },
    {
        "id": 2,
        "nome": "Tosa",
        "preco": "40,00",
        "descricao": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
    },
    {
        "id": 3,
        "nome": "Dog Spa",
        "preco": "100,00",
        "descricao": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a, veritatis voluptates natus, quaerat voluptatibus tenetur in labore ad consequatur repudiandae quia veniam quas deserunt iure voluptatem. Saepe, est ipsam!"
    }
];

const servicosController = {
    index: function(req, res){

        res.render('servicos', {
            servicos: listaServicos
        });
    },
    listarAdmin: (req, res) =>{
        res.render("admin/listaServicos", {
            servicos: listaServicos
        })
    },
    cadastrar: (req, res) =>{
        res.render("admin/formServicos");
    },
    cadastrarServico: (req, res) =>{
        let {nome, preco, descricao} = req.body;
        console.log(nome,preco,descricao);
        listaServicos.push({
            nome: nome,
            preco: preco,
            descricao: descricao
        });
        res.redirect("/admin/servicos");
    },
    editar: (req,res, next) =>{
        let id = req.params.id;
        let servico = listaServicos.find(servico => 
            {return servico.id == id}
            );
        res.render("admin/editarServicos", {
            servico: servico
        })
    },
    editarServico: (req,res, next) =>{
        let {id, nome, preco, descricao} = req.body;
        listaServicos.find(servico => {
            if(servico.id == id){
                servico.nome = nome,
                servico.preco = preco,
                servico.descricao = descricao
            }
        });
        res.redirect("/admin/servicos");
    },
    excluirServico: (req, res, next) =>{
        let id = req.params.id;
        listaServicos = listaServicos.filter(servico => {
            if(servico.id!=id){
                return servico;
            };
        });
        res.redirect("/admin/servicos");
    }
}

module.exports = servicosController;