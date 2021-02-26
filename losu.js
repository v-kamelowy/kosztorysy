   function los(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function losowanie() {

    var x = los(15+1);
    var y = los(20+1);

    var kosztorysy = [
        {id:0, name:"naprawy"},
        {id:1, name:"sprzedaży"},
        {id:2, name:"kupna"},
        {id:3, name:"czyszczenia"},
        {id:4, name:"recyklingu"},
        {id:5, name:"pakowania"},
        {id:6, name:"analizy"},
        {id:7, name:"oczyszczenia"},
        {id:8, name:"diagnozy"},
        {id:9, name:"montażu"},
        {id:10, name:"demontażu"},
        {id:11, name:"implementacji"},
        {id:12, name:"podłączenia"},
        {id:13, name:"wpięcia"},
        {id:14, name:"wymiany"},
        {id:15, name:"odłączenia"},
        ]

    var czego = [
        {id:0, name:"komputera"},
        {id:1, name:"drukarki"},
        {id:2, name:"myszy Komputerowej"},
        {id:3, name:"klawiatury"},
        {id:4, name:"monitora"},
        {id:5, name:"dysku SSD"},
        {id:6, name:"słuchawek"},
        {id:7, name:"pamięci RAM"},
        {id:8, name:"procesora CPU"},
        {id:9, name:"procesora graficznego"},
        {id:10, name:"zasilacza"},
        {id:11, name:"pendrive'a"},
        {id:12, name:"interface'u SATA"},
        {id:13, name:"serwera"},
        {id:14, name:"gniazda mini-jack"},
        {id:15, name:"routera"},
        {id:16, name:"switcha"},
        {id:17, name:"kabli RJ-45"},
        {id:18, name:"dysku HDD"},
        {id:19, name:"gniazdka elektrycznego"},
        {id:20, name:"wentylatora"},
        ]
var koszt = kosztorysy.find(koszt => koszt.id === x);
var czg = czego.find(czg => czg.id === y);

    var kosztorysy_string = String(koszt.name);
    var czego_string = String(czg.name);

    document.getElementById("miejsce0").innerHTML = "Kosztorys";
    document.getElementById("miejsce1").innerHTML = kosztorysy_string;
    document.getElementById("miejsce2").innerHTML = czego_string;
}