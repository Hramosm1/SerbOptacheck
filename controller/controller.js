// const {sql, poolPromise} = require('../database/db');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const fs = require('fs');
var jwt = require('../services/jwt');

class MainController{
    //Creacion de Token
   async createToken(req,res){
        var params = req.body;
        var user = {
            user : 'pablo_Optacheck',
            password : 'UOgVafoyJP5N11l'
        };
        if(user.user == params.user){
            if(user.password == params.password){
                return res.status(200).send({token:jwt.createToken(user)});
            }else{
                return res.status(404).send({message:'El password es incorrecto'});
            }      
        }else{
            return res.status(404).send({message:'El usuario no es el correcto'})
        }
    }
    //Ejecutar Proceso Almacenado
	
    async executeProcedure(req,res){
	    var params = req.body
        const jsonOriginal = params.content;
        const jsonParse = JSON.stringify(jsonOriginal);
       
        try {
            const request = await prisma.$queryRawUnsafe(`execute usp_crear_datosEstadoOptacheck '${jsonParse}'`)
            if (request != []) {
                return res.status(200).send({message: 'Se grabo correctamente la data en la base de datos' })
            } else {
                return res.status(404).send({ message: 'No se ha podido obtener alguna respuesta de la base de datos' })
            }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor ' + error })
        }
        
    }  

    async ComboDepartamento(req,res){   
        try {
                const request = await prisma.$queryRawUnsafe(`usp_obtener_comboDepartamento`) 
                if (request != []) {
                    return res.status(200).send({request})
                } else {
                    return res.status(404).send({message:'No se ha podido obtener alguna respuesta de la base de datos'})
                }

        } catch (error) {
            return res.status(500).send({ message: 'No se ha podido capturar la informacion requerida por el servidor '+error })
        }
    }
}

const controller= new MainController();
module.exports = controller;
