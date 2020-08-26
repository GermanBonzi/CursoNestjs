import { Controller, Get, Post, Put, Delete ,Body, Param,Req,Res} from '@nestjs/common';
import {CrearTarea} from "./dto/crear-tarea.dto"
import {Request, Response} from "express"

@Controller('tareas')
export class TareasController {
    @Get()
    getTareas():{}{
        return {"hola":"mundo"}
    }
    //getTareas(@Req()req,@Res()res){
      //  console.log(req.body)
       // return res.send('hola mundo desde express')
    //} 
    @Post()
    crearTarea(@Body() tarea: CrearTarea){
        console.log(tarea.titulo,tarea.descripcion,tarea.hecho)
        return 'creando tareas'
    }
 
    @Put(':id')
    actualizarTareas(@Body()tarea:CrearTarea, @Param('id')id){
        console.log(tarea)
        console.log(id)
        return 'actualizando una tarea'
    }

    @Delete(':id')
    eliminarTarea(@Param('id')id){
        console.log(id)
        return 'tarea eliminada'
    }


    
}
