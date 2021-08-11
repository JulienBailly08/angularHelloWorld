
/**
 * Magnifique class qui encadre ces pilotes de oufs !!
 * 
 * @author : Juju
 * @copyright : Ouam
 * 
 */
 export class Driver{
    public fullName:string;
    public pays:string | null;
    public coverImage:string;
    public category:string;
    public likeIts:number;

    constructor(fullName:string, pays:string | null, coverImage:string, category:string, likeIts:number){
        this.fullName = fullName;
        this.pays = pays;
        this.coverImage = coverImage;
        this.category = category;
        this.likeIts = likeIts;
    }
}