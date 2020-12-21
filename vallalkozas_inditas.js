const proaktiv_latasmod=()=> [{
    1: "elorelato szemlelet",
    2: "kornyezeti valtozasokra adott, jovobeni igenyeknek elebe meno valasz",
    3: "anticipalt trendekre alapozo magatartas",
    4: "versenytarsakat megelozo ujitasok bevezetese"
}]

const elonytelen_magatartasmod_kezeles=()=> [{
    1: "ad-hoc, esetlegesen, kiszamithatatlanul, kovetkezetlenul meghozott dontesek",
    2: "idointervallum nelkuli projektek ('start' datum megvan, 'stop' datum nincs) --> uj hatarido a prior projektnek: dec. 15!",
    3: "nincs megjelenitve a referencia arra vonatkozolag hogy honnan indultunk es mennyit haladtunk",
    4: "nincs megjelenitve, mik voltak a merfoldkovek",
    5: "nem unnepeltunk merfoldkoveket",
    6: "siettetes-erzes van bennem, mert az elegedetlenseg-erzet miatt erzem magam lemaradva"
}]

const vallalkozoi_en_elemei =()=> [{
    // Mindenkiben benne van mind a három szerepre való hajlam,
    // de egyénenként eltérő, hogy ki melyikben érzi magát otthon.
    vallalkozo_vallalkozo: {
        1: "a vallalkozasan dolgozik",
        2: "felismeri az uj dolgokat",
        3: "elinditani szeret"
    },
    vallalkozo_menedzser: {
        1: "a vallalkozasaban dolgozik",
        2: "megcsinaltatja a dolgokat",
        3: "fenntartani szeret"
    },
    vallalkozo_szakember: {
        1: "a vallalkozasaban dolgozik",
        2: "megcsinalja a dolgokat",
        3: "dolgozni szeret"
    }
}]

module.exports.folyamat_abra=()=>{
    let elemek = {
        uzleti_tervezes: {},
        strategiai_tervezes: {},
        penzugyi_tervezes: {},
        szallito_vevo_analitika_vezetese: {},
        keszletnyilvantartas: {},
        tartalekkepzes: {},
        uzleti_vallalkozoi_en_fejlesztese: {
            uzleti_gondolkodas_fejlesztese: {
                tudatos_tervezes: {
                    id: 1,
                    kapcsolodo_elemek: {
                        proaktiv_latasmod,
                        innovativitas,
                        kockazatkezeles,
                        elonytelen_magatartasmod_kezeles,
                        vallalkozoi_en_elemei,
                    }
                },
            }
        }
    }
    return console.log(elemek)
};