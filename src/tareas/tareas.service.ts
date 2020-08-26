import { Injectable } from '@nestjs/common';
import { Tarea } from "./interfaces/tareas";
@Injectable()
export class TareasService {

    tareas: Tarea[]=[
        {
            id:1,
            titulo:"tarea 1",
            descripcion:"testeando tareas",
            hecho:true
        },
        {
            id:2,
            titulo:"tarea 2",
            descripcion:"testeando tareas 2",
            hecho:true
        },
        {
            id:3,
            titulo:"tarea 3",
            descripcion:"testeando tareas 3",
            hecho:false
        },
        {
            id:1,
            titulo:"tarea 4",
            descripcion:"testeando tareas 4",
            hecho:false
        }
    ];
    
}
