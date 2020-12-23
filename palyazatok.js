module.exports.feladatok=()=>{
    let todo = {
    1: "erdeklodni az uj fiatal gazda palyazatrol: https://szilberhorn.com/fiatal-gazda-palyazat.html",
    2: "fontos tudnivalok a fiatal gazda palyazatrol: https://fiatalgazdapalyazat.com/",
    3: "erdotelepites"[{
        id: 1,
        honlap: "https://agrarkozosseg.hu/palyazatok/erdosites-tamogatasa-2/",
        telefonszam: "+3670 424 4070",
        e_mail: "agrarkozosseg@gmail.com",
        cim: "1037 Budapest, Szépvölgyi út 39",
        egyuttes_elbiralasi_hatarnapok: "2020. december 31. / 2021. június 30. / 2021. december 31.",
        idotartam: "2016. augusztus 15 - 2021. december 31.",
        kivalasztasi_kriteriumok: "",
        tartalmi_ertekelesi_szempont: [{
            id: 1,
        }],
        tamogatas_formaja: "vissza nem térítendő - kizárólag fizetési igénylés benyújtása esetén!!! (bővebben az egyeb_fontos_tudnivalok obejctben)",
        fizetesi_kerelem_benyujtasa: "ügyfélkapun keresztül, a támogatói okirat hatálybalépését követő 36 hónapon belül",
        csatolando_dokumentumok: [{
            tamogatasi_kerelemhez:[
                {
                id: 1,
                dokumentum: "mérési jegyzőkönyv",
                szükseges: true,
                rendelkezesre_all: false,
                csatolva: false,
                },
                {
                id: 2,
                dokumentum: "az ingatlan használati jogosultságát igazoló okirat, kivéve, ha a B) célterület (! magyarázat lejjebb a 'fontos_tudnivalok' objectben) esetében Korm. r. 3.§ (2) bekezdése szerinti bejelentés ennek igazolását már tartalmazta",
                szükseges: true,
                rendelkezesre_all: false,
                csatolva: false,
                },
                {
                id: 3,
                dokumentum: "a B) célterület esetében a Korm. r. 4. § (1) bekezdés b) pontja szerinti igazolás",
                szükseges: false,
                rendelkezesre_all: false,
                csatolva: false,
                },
                {
                id: 4,
                dokumentum: "foglalkoztatási nyilatkozat(?)",
                szükseges: false/true,
                rendelkezesre_all: false,
                csatolva: false,
                },
                {
                id: 5,
                dokumentum: "szennyvíziszap, szennyvíziszap komposzt, vagy szennyvíziszapból készült termésnövelő anyag, vagy szennyvízfelhasználása esetén a jogerős talajvédelmi terv és a szolgáltatóval kötött szerződés másolata",
                szükseges: false,
                rendelkezesre_all: false,
                csatolva: false,
                }
            ],
            kifizetesi_igenyleshez:[
                {
                id: 1,
                dokumentum: "foglalkoztatás bővítése esetén a munkaszerződés másolata",
                kotelezo_csak: "erdőtelepítés elsőkiviteli támogatás kifizetési igényének benyújtása esetén",
                szükseges: false/true,
                rendelkezesre_all: false,
                csatolva: false,
                },
                {
                id: 2,
                dokumentum_a: "foglalkoztatás bővítése esetén a munkaszerződés másolata",
                dokumentum_b: "vadkárelhárító kerítés, villanypásztor, pontos hosszának és elhelyezkedésének leírása",
                kotelezo_csak: "ipari célú fás szárú ültetvény telepítés támogatás kifizetési igényének benyújtása esetén",
                szükseges: false,
                rendelkezesre_all: false,
                csatolva: false,
                },
                {
                id: 3,
                // A teljes kötelezettségvállalási időszak alatt meg kell őrizni és az Államkincstár
                // által végzett helyszíni ellenőrzések során az Államkincstárnak,
                // vagy a képviseletében eljáró hatóságnak be kell tudni mutatni
                dokumentum: "mérési jegyzőkönyv eredeti, vagy másolati példánya",
                szükseges: true,
                rendelkezesre_all: false,
                csatolva: false,
                },
            ]
        }],
        fizetes_esedekessege: "a támogatásra vonatkozó adminisztratív ellenőrzések, keresztellenőrzések, helyszíni ellenőrzések lefolytatása után egy részletben",
        tamogatas_merteke: [
            erdotelepites={
                elsokiviteli_koltsege: [
                {
                    id: 1,
                    celallomany_tipus_csoport: "tölgy-bükk és egyéb keménylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 2744
                },
                {
                    id: 2,
                    celallomany_tipus_csoport: "egyéb lágylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 2082
                },
                {
                    id: 3,
                    celallomany_tipus_csoport: "akác",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 1803
                },
                {
                    id: 4   ,
                    celallomany_tipus_csoport: "nemesnyár",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 1596
                }
                ],
                elso_ev_apolasi_koltsege: [
                {
                    id: 1,
                    celallomany_tipus_csoport: "tölgy-bükk és egyéb keménylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 623
                },
                {
                    id: 2,
                    celallomany_tipus_csoport: "egyéb lágylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 467
                },
                {
                    id: 3,
                    celallomany_tipus_csoport: "akác",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 467
                },
                {
                    id: 4   ,
                    celallomany_tipus_csoport: "nemesnyár",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 467
                }
                ],
                masodik_evtol_apolasi_koltseg: [
                {
                    id: 1,
                    celallomany_tipus_csoport: "tölgy-bükk és egyéb keménylomb",
                    apolasi_idoszak_evben: 11,
                    euronak_megfelelo_forint_osszeg_hektaronkent: 6624
                },
                {
                    id: 2,
                    celallomany_tipus_csoport: "egyéb lágylomb",
                    apolasi_idoszak_evben: 8,
                    euronak_megfelelo_forint_osszeg_hektaronkent: 2602
                },
                {
                    id: 3,
                    celallomany_tipus_csoport: "akác",
                    apolasi_idoszak_evben: 5,
                    euronak_megfelelo_forint_osszeg_hektaronkent: 1514
                },
                {
                    id: 4   ,
                    celallomany_tipus_csoport: "nemesnyár",
                    apolasi_idoszak_evben: 5,
                    euronak_megfelelo_forint_osszeg_hektaronkent: 1381
                }
            ]},
            ipari_celu_fas_szaru_ultetveny={
                telepites_koltsege: [
                {
                    id: 1,
                    celallomany_tipus_csoport: "tölgy-bükk és egyéb keménylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 0
                },
                {
                    id: 2,
                    celallomany_tipus_csoport: "egyéb lágylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 0
                },
                {
                    id: 3,
                    celallomany_tipus_csoport: "akác",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 1298
                },
                {
                    id: 4   ,
                    celallomany_tipus_csoport: "nemesnyár",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 1787
                },
                ],
                elso_ev_apolasi_koltsege: [
                {
                    id: 1,
                    celallomany_tipus_csoport: "tölgy-bükk és egyéb keménylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 0
                },
                {
                    id: 2,
                    celallomany_tipus_csoport: "egyéb lágylomb",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 0
                },
                {
                    id: 3,
                    celallomany_tipus_csoport: "akác",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 342
                },
                {
                    id: 4   ,
                    celallomany_tipus_csoport: "nemesnyár",
                    euronak_megfelelo_forint_osszeg_hektaronkent: 429
                },
                ],
                egyeb_fontos_tudnivalok=[
                    {
                    id: 1,
                    hivatkozas: "3.1.2.2 pont",
                    cim: "Választható, önállóan nem támogatható tevékenységek",
                    info_1:
                        "A) célterület" = {
                            a: kerítés,
                            b: villanypásztor,
                            c: padka,
                            d: erdőszegély_kialakítása,
                            e: mikorrhizált_csemete_telepítése,
                            f: őshonos_ritka_elegyfajok_alkalmazása
                        },
                    info_2:
                        "B) célterület" = {
                            a: kerítés,
                            b: villanypásztor_kialakítása
                        }
                    },
                    {
                    id: 2,
                    hivatkozas: "5.1 pont, 5.) bekezdés",
                    cim: "A támogatás formája",
                    info: "A kiegészítő tevékenységekre vonatkozó kifizetés igénylést az erdőtelepítés esetén az elsőkiviteli kifizetési igényléssel, ültetvény telepítés esetén a kifizetési igényléssel egyidejűleg lehet benyújtani"
                    },
                    {
                    id: 3,
                    hivatkozas: "5.1 pont, 5.) bekezdés",
                    cim: "A támogatás formája",
                    info: ""
                    }
                ]
            }
        ]
    }],
    4: "aranykalaszos gazda kepzesek"[{
        id: 2,
        indulas: "egesz evben hetente tobbszor (?)",
        idotartam: "?",
        kepzesi_dij: 90000,
        vizsgadij: 60000,
        befizetesi_hatarido: "jelentkezes utan 3 nappal: 100.000 Ft, vizsga elott legkesobb 20 nappal: 50.000 Ft",
        kedvezmeny: "?",
        elmelet: "online",
        gyakorlat: "nincs, egy konzultacio szukseges a vizsga elott",
        varhato_vizsgaidopont: "?",
        honlap: "http://minervakft.hu/okj-tanfolyamok/aranykalaszos-gazda",
        telefonszam: "0670 593 2232",
        e_mail: "info@minervakft.hu"
        },
        {
        id: 3,
        indulas: "2020. 12. 30.",
        idotartam: "2 honap",
        kepzesi_dij: 94410/104900,
        vizsgadij: 63900,
        befizetesi_hatarido: "?",
        kedvezmeny: "egyosszegu fizetes eseten 94.410 Ft a kepzesi dij 104.900 Ft helyett",
        elmelet: "online",
        gyakorlat: "Vac mellett talalhato gazdasagban",
        varhato_vizsgaidopont: "?",
        honlap: "https://www.efeb.hu/felnottkepzes/aranykalaszos-gazda-tanfolyam-okj-kepzes?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkOMiUj3J7YXnatpyTjU-bZKuvglDZP4GgrLTcrkvNDmMV51SNPC2JxoCnZUQAvD_BwE",
        telefonszam: "061 321 9215, 0670 616 1171",
        e_mail: "info@efeb.hu"
        },
        {
        id: 4,
        indulas: "2020. 12. 10. / 2021.",
        idotartam: "?",
        kepzesi_dij: 150000,
        vizsgadij: 0,
        befizetesi_hatarido: "2021. 01. 31.",
        kedvezmeny: "decemberi jelentkezes eseten 240.000 Ft helyett 150.000 Ft a teljes dij",
        elmelet: "online",
        gyakorlat: "?",
        varhato_vizsgaidopont: "2021. tavasza",
        honlap: "https://elia.hu/aranykalaszos-gazda-kepzes/?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkPJJrXDYYbPv-mpAycFpZNVBklYXlVMhuPPGjjTJuokEYmuCJAHpRxoCIbgQAvD_BwE",
        telefonszam: "0670 550 0555, 0630 473 0933",
        e_mail: "oktatas@elia.hu"
        }],
    5: "uj palyazati lehetoseg hamarosan"[{
        id: 5,
        honlap: "https://magyarmezogazdasag.hu/2020/12/02/az-elelmiszeripar-fejlesztese-prioritas-lesz"
        }],
    6: "udemy react course folytatasa",
    7: "input formot osszevonni a feldolgozott konyvek js objectjevel",
    8: "megkeresni hova toltottem fel a mobilszolgaltatok.ods-t",
    9: "megkeresni hova toltottem fel a diakhitel_infok.ods-t",
    10: "app.plant_learning folytatasa (kesz: html input form)",
    11: "app.plant_learning html input form-ját függőleges síkba hozni (ne szöveg-hosszúságként eltérő intendálással jelenjen meg az input field, hanem mindegyik a leghosszabb szöveghez igazodjon egy sorba)",
    12: "app.plant_learninghez uj adatok"[{
        id: 6,
        honlap: "https://magyarmezogazdasag.hu/2020/12/06/letrehoztak-novenyfajok-legnagyobb-katalogusat",
        github: "https://github.com/idiv-biodiversity/lcvplants/"
    }],
    13: "megkeresni az uj memoriapalotas fajlt (a regi megvan)",
    14: "piackutatas.ods befejezese",
    15: "teli_novenyismereti_beszamolo_2019_2020.ods + kepek folytatasa",
    16: "bme oktatok elerhetosegenek legyujtese",
    18: "windows mindmapek (projektek megvalositasanak lepesei mindmanagerben)",
    19: "osszegyujteni a mindmapeket + telepiteni virtualboxot windows 10-el es mindmanagerrel egyutt",
    20: "bevinni ezeket a taskokat task_manager mappaba egy olyan tablazatba mint a telepitett_programok.html",
    21: "schedule: calendar.html folytatasa",
    22: "megkeresni es letolteni a felhobe feltoltott konyveket",
    23: "interaktiv tartalomjegyzeket irni aditi singhal - how to memorize anything c. konyvehez",
    24: "utananezni miert nem mukodik a 'del', 'home' es 'end' gyorsbillentyu",
    25: "alomtabla kepeit integralni a fresh portfolio site-al (es normalizalni az animacioit)",
    26: "erdekolesi teruleteket osszeszurni a projektekkel",
    27: "szerv_meridianok.ods fajlt egybevonni az ayurvedikus heti receptekkel es az edzestervvel",
    28: "erettsegi feladatsorokat megkeresni",
    29: "install a hover modal",
    30: "edzesi naplo vezetese (2 naponta - 20:00-ig max)",
    31: "flow dia folders.ods-t folytatni",
    32: "schedule mappa html-css tartalmat navigalhatova tenni a jobbra-balra billentyukkel",
    33: "bevinni a one-click-copy funkciot a telepitett_programok.html-be",
    34: "irni egy scriptet ami egy paranccsal feltelepit minden rogzitett programkodot linuxban",
}
return console.log(todo)
};

module.exports.olvasas=()=>{
const list = {
write_daily_progress_for: "Memory Castle",
write_daily_progress_for: "a book a day" [{
    1: "Vallalkozasi alapismeretek",
    2: "Dominic O'Brien - How to develop a perfect memory",
    3: "Ayurvedikus fozes",
    4: "Clojure for the Brave and True",
    5: "Obadovics - Matematika"
}],
}
return console.log(list);
};

module.exports.elvegezve=()=>{
let done = {
    1: "eltavolitott alkalmazasok (win10 alaphelyzetbe allitasa utan) html-jét intendalni es template-kent hasznalni a linuxra telepitett programokhoz",
    2: "befejezni a felhoben tarolt mappak letolteset (kiveve: mobilszolgaltatok.ods, diakhitel_infok.ods, konyvek)",
    3: "alkalmazni a quiz formot javascritben az app.plant_learning-en",
    4: "npm install boron",
    5: "megkeresni a projekteket es a szukseges lepeseket osszefoglalo .ods fajlt",
    6: "malnatovek metszese csutortok esteig",
    7: "portfolio oldal kidolgozasat elkezdeni",
    8: "telepitett_prgoramok.html-be integralni az aktualis datumot"
}
return console.log(done)
};
