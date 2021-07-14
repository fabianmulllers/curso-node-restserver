const {response, request} = require('express')


const usuariosGet = (req = request, res = response) => {

    const { ciudad,region,page = 1,limit=10,pais} = req.query;

    res.json({
        ok: true,
        msg: "get API - controlador",
        ciudad,
        region,
        page,
        limit,
        pais
    });
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(200).json({
        msg: "put API - controlador",
        id
    });
};

const usuariosPost = (req, res = response) => {

    const {nombre, edad}= req.body;
    
    res.status(200).json({
        ok: true,
        nombre,
        edad
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: "delete API - controlador"
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: "patch API - controlador"
    });
};

module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}