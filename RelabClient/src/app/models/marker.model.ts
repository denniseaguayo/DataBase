export class Marker {
    icon = {}
   //Quando creo un nuovo marker e verifico quale label viene passata al costruttore, se contiene il testo
   //“Gas naturale” o “Energia elettrica” (abbreviati in Gas e Elettrica) imposto l’icona e cancello
   //l’etichetta
    constructor(public lat: number, public lng: number, public label?: string)
    {
        if (this.label.includes("Gas")) {
            this.icon = { url: './assets/img/gas.ico' };
             this.label = "";
        }
        if(this.label.includes("elettrica"))
        {
            this.icon = { url: './assets/img/electricity.ico' };
             this.label = "";
        }
        if(this.label.includes("Teleriscaldamento"))
        {
            this.icon = { url: './assets/img/bottle-24.ico' };
             this.label = "";
        }
        if(this.label.includes("GPL"))
        {
            this.icon = { url: './assets/img/triangle-24.ico' };
             this.label = "";
        }
        if(this.label.includes("NULL"))
        {
            this.icon = { url: './assets/img/question-mark-6-24.ico' };
             this.label = "";
        }
        if(this.label.includes("Biomasse solide"))
        {
            this.icon = { url: './assets/img/biomass-24.ico' };
             this.label = "";
        }
        if(this.label.includes("RSU per teleriscaldamento"))
        {
            this.icon = { url: './assets/img/arrow-204-24.ico' };
             this.label = "";
        }
        if(this.label.includes("Biomasse liquide e gassose"))
        {
            this.icon = { url: './assets/img/gas-station-24.ico' };
             this.label = "";
        }
        if(this.label.includes("Olio combustibile"))
        {
            this.icon = { url: './assets/img/arrow-239-24.ico' };
             this.label = "";
        }
    }
}

