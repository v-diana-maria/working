const elonytelen_szokasok = [{
    felelotlen_vizhasznalat: {
        1: "olykor 20 perces tusolasi ido --> lefoldeles hianya, a tul sok gepezes kovetkezteben",
        2: "arcpakolas-lemosas 2 perc vizfolyatassal --> etrend megszervezese, hogy ne legyen szukseg arcpakolasra",
        3: "mosogatas folyoviznel ha nem aztattam be elotte az edenyeket mert nem volt kedvem helyet csinalni --> elkoltozes, hogy ne masok utan takaritsak"
    },
    ivas_az_elme_zajongasa_ellen: {
        1: "ha lenne palinkam mar nem lenne-hozzaallas, szulok hajlamainak megvaltoztatasara tett erofeszitesek hiabavalonak bizonyulnak --> nem az en dolgom (Bela)",
        2: "nem az en dolgom - mit jelent? miert fontos nekem a csaladom sorsa? miert latom azt hogy hazudnak maguknak? --> projekcio, ha en hazudok magamnak, masban hatvanyozottan meglatom ezt",
        3: "egyszeruen elengedjem azokat akik megbantottak es szeretem oket? --> csak magamert vagyok felelos (Bela)",
        4: "csak magamert vagyok felelos - mit jelent? a gyerekeimert is felelos leszek! min valtoztassak magamban hogy egeszseges felelossegerzet legyen bennem?"
    },
    projekcio: {
        1: "masok hibaztatasa amikor elegedetlennek erzem magam/nem a terveim szerint alakul valami --> mi tartozik a sajat felelossegem korebe? mi az ami nem csak rajtam mult? mindent beleadtam?",
        2: "masok hibainak felnagyitasa --> mikor, milyen allapotban veszem eszre ezt?"
    }
}]

module.exports.szokasok_celfa=()=>{
    let elonyos_szokasok = {
        fizikai_munkavegzes: {
            kerti_munkak,
            rendrakas,
            mosogatas,
            takaritas,
            fertotlenites,
            mosas,
            ablaktorles,
            portorles,
            fenyezes,
            kocsimosas,
            novenyapolas,
            fozes,
            sutes,
            karbantartas,
            bevasarlas,
            lomtalanitas,
            szelektiv_hulladekgyujtes,
            komposztalas,
            fermentalas,
            palinkafozes,
            edzes,
            nyujtas,
            kuzdosport,
        },
        szellemi_munkavegzes: {
            napi_10_perc_olvasas,
            napi_2_ora_programozas,
            napi_4_ora_gyermekekkel_valo_foglalkozas,
            napi_1_ora_erettsegire_keszules,
            napi_2_ora_beszelgetes,
            napi_fel_ora_elmelkedes,
            napi_20_perc_konyveles,
            napi_10_perc_tervezes_masnapra,
            napi_2_ora_szabadido
        },
        szabadido: {
            utazas,
            csoki,
            extrem_sport,
            setalas,
            napozas,
            turazas,
            hegymaszas,
            beszelgetes,
            bor_ivas,
            palinka_ivas,
            party,
            zenehallgatas,
            zeneszerkesztes,
            uszas,
            szauna,
            designolas,
            rajzolas,
            szex,
            palinka_keszites,
            szorp_keszites,
            gyogytea_keszites,
            gyogytea_ivas,
            alomtabla_szerkesztes,
            alomtabla_nezes,
            videovagas,
            animacioszerkesztes,
            szokasok_celfa_szerkesztes,
        },
        szamonkeres: {
            elvegzett_napi_feladatok,
            el_nem_vegzett_napi_feladatok,
        },
        pihenes: {
            napi_8_ora_alvas,
            napi_fel_ora_meditacio
        }

    }
    return console.log(elonyos_szokasok)
};