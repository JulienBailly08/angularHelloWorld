
/**
 * Magnifique class qui encadre ces pilotes de oufs !!
 * 
 * @author : Juju
 * @copyright : Ouam
 * 
 */
 export class Driver{
    
    constructor(public fullName:string,
                public pays:string | null,   
                public coverImage:string, 
                public category?:string,  // le ? permet d'avoir un champs potentiellement null ou optionnel
                public likeIts:number = 0){
       
    }
}