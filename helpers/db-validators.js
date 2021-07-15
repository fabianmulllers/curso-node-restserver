
const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async(role = '') => {
    const existRole = await Role.findOne({ role });
    if( !existRole ){
        throw new Error(`El rol ${ role } no esta registrado en la BD`);
    }
}

const esRoleValidoUpdate = async(role = '') => {
    if(role.length === 0){
        return;
    }
    const existRole = await Role.findOne({ role });
    if( !existRole ){
        throw new Error(`El rol ${ role } no esta registrado en la BD`);
    }
}


const emailExiste = async( correo = '') => {
    const existeEmail = await Usuario.findOne( { correo } );
    if( existeEmail ){
        throw new Error(`El email: ${ correo } ya existe en la BD`); 
    }
}

const existeUsuarioPorId = async(id = '') => {

    const existeUsuario = await Usuario.findById(id);
    if( !existeUsuario ){
        throw new Error(`El id no existe ${ id }`)
    }
}

module.exports ={
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    esRoleValidoUpdate
}