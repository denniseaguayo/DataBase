export class Icon { //Creo la classe Icon
    public scaledSize:ScaledSize;
    constructor(public url: string, size: number){
        this.scaledSize = new ScaledSize(size,size);
    }

    setSize(size: number) { //li passo la grandezza dell'icona
        this.scaledSize = new ScaledSize(size,size);
    }
}

export class ScaledSize { //Creo la classe ScaledSize
    constructor(
    public width:  number,
    public height: number){}
}
