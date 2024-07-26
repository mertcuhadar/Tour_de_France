var config = {
    style: 'mapbox://styles/mertcuhadar/clyvjhfat005m01r2231yhvog',
    accessToken: 'pk.eyJ1IjoibWVydGN1aGFkYXIiLCJhIjoiY2x5cjVuaHNlMDJqYzJrcXgwc3luM2c4ayJ9.n0jIFiV8QEbnwidJ2MR-XQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tour de France 2024',
    subtitle: 'Turun öyküsü',
    byline: 'Mert Cuhadar',
    footer: 'MEF Üniversitesi',
    chapters: [
        {
            id: 'tour',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://cdn.xsolla.net/merchant-bucket-prod/files/uploaded/sitebuilder/68486/a65f1521edb252df2513cd9bddf123c8.png',
            description: '1903 ten beri düzenlenen, yol bisikletinin en büyük müsabakası Fransa Bisiklet Turu, 29 Haziran-21 Temmuz tarihleri arasında 111. kez koşuldu. İtalya dan başlayan Fransa Bisiklet Turu, tarihinde ilk defa, Paris Olimpiyatları sebebiyle Nice te sona erdi.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 1',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/tdf24-profils-web-e-tape-1/55155/0:0,1005:603-960-0-90/436fa',
            description: 'Floransa dan başlayan, yarı dağlık 209 kilometrelik ilk etap Rimini de sona erdi.',
            location: {
                center: [11.29760, 43.73794],
                zoom: 16,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1f',
            alignment: 'right',
            hidden: false,
            title: 'Romain Bardet',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-e1-arrivee/56637/0:0,2000:890-1200-0-70/b7207', 
            description: '1. etabı Team dsm-firmenich PostNL in Fransız yıldızı Romain Bardet kazandı! Bardet kariyerinde ilk defa sarı mayoyu giymeye hak kazandı. <img src="https://pbs.twimg.com/media/GRQLN4BWIAAJxK1?format=jpg&name=large" style="width: 100%;">',
            location: {
                center: [12.57651, 44.05963],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 2',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/2/54053/0:0,1005:604-960-0-90/f6cb9',
            description: 'Tour de France in İtalya topraklarındaki 199.2 kilometrelik yarı dağlık ikinci etabı Cesenatico dan başlayarak Bologna da sona erdi.',
            location: {
                center: [12.388, 44.210],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2f',
            alignment: 'left',
            hidden: false,
            title: '2. Etap Kaçış Grubuna!',
            image: 'https://hips.hearstapps.com/hmg-prod/images/kevin-vauquelin-of-france-and-team-arkea-b-b-hotels-news-photo-1719762381.jpg?resize=1200:*',
            description: 'Tour de France 2024 te henüz ikinci günde kaçış grubu ilk zaferini aldı. Bologna da sona eren etabı Arkéa-B&B Hotels ten Kévin Vauquelin kazandı ve takımına tarihinin ilk Tour de France etap zaferini getirdi.',
            location: {
                center: [11.329, 44.490],
                zoom: 18,
                pitch: 60,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 3',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/3/54061/0:0,1005:603-960-0-90/a4155',
            description: 'Plaisance den Torino ya uzanan 246 kilometrelik düz etap sprinterler için ilk şans oldu.',
            location: {
                center: [9.634, 45.0554],
                zoom: 15,
                pitch: 73,
                bearing: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3f',
            alignment: 'right',
            hidden: false,
            title: 'İlk toplu sprintin kazananı Biniam Girmay!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-hp-etape-3/57097/0:0,2410:1132-2400-0-70/ffd02',
            description: 'Tour de France in ilk toplu sprintine sahne olan 3. etabı Intermarché-Wanty nin Eritreli yıldızı Biniam Girmay kazandı! Biniam Girmay Tour de France de etap kazanan ilk siyah sporcu olarak tarih yazdı.',
            location: {
                center: [7.692, 45.071],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 4',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/4/54049/0:0,1005:603-960-0-90/4e94c',
            description: 'Pinerolo Valloire arasında koşulan 139.6 kilometrelik dağlık etapla birlikte peloton Tour de France in anavatanı Fransa ya giriş yaptı',
            location: {
                center: [7.319, 44.886],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4f',
            alignment: 'left',
            hidden: false,
            title: 'İlk dağ etabının galibi Tadej Pogacar!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-hp-etape-4/57282/0:0,2000:890-1200-0-70/51189',
            description: 'UAE Team Emirates sporcusu, iki Tour de France galibi <a href="https://tr.wikipedia.org/wiki/Tadej_Poga%C4%8Dar#:~:text=Tadej%20Poga%C4%8Dar%2C%20(Slovence%20telaffuz%3A,Sloven%20bir%20yol%20bisikleti%20yar%C4%B1%C5%9F%C3%A7%C4%B1s%C4%B1d%C4%B1r.&text=Sadece%2020%20ya%C5%9F%C4%B1ndayken%202019%20Tour,kazanan%20en%20gen%C3%A7%20bisiklet%C3%A7i%20oldu." target="_blank" title="Opens in a new window"><strong>Tadej Pogacar</strong></a> ilk dağlık etap sonucu Fransa ya sarı mayoyla giriş yaptı. <img src="https://todaycycling.com/wp-content/uploads/2024/07/tour-de-france-2024-etape-4-classement-general-maillot-jaune-du-2-juillet.jpg" style="width: 100%;"> ',
            location: {
                center: [6.430, 45.164],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 5',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/5/54064/0:0,1005:603-960-0-90/fffd4',
            description: 'Saint-Jean-de-Maurienne Saint-Vulbas arası 217 kilometrelik düz etap muazzam bir toplu finişe sahne oldu.',
            location: {
                center: [6.351, 45.283],
                zoom: 14,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5f',
            alignment: 'right',
            hidden: false,
            title: 'Tarihin en fazla etap kazananı: Mark Cavendish!',
            image: 'https://static.independent.co.uk/2024/07/03/17/03-5c3bc80d28bb43febe50dd7d45177f76.jpg',
            description: 'Müthiş bir mücadeleyle Tour de France tarihinde 35. etap galibiyetini elde eden Astana Qazaqstan takımının 39 yaşındaki Man Adası doğumlu yıldızı Mark Cavendish tur tarihinin en fazla etap kazanan sporcusu rekorunun tek başına sahibi oldu!',
            location: {
                center: [5.411, 45.830],
                zoom: 10,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 6',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/6/54054/0:0,1005:604-960-0-90/225bc',
            description: 'Mâcon-Dijon arası geçilen 163.5 kilometrelik düzlük etap, tahmin edildiği gibi, bir toplu finişe sahne oldu.',
            location: {
                center: [4.788, 46.312],
                zoom: 15,
                pitch: 60,
                bearing: 270
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6f',
            alignment: 'left',
            hidden: false,
            title: '6. etabın galibi: Dylan Groenewegen',
            image: 'https://pbs.twimg.com/media/GRpzVQZbMAEYYYn?format=jpg&name=large',
            description: 'Toplu sprint finişiyle biten 6. etabı Team Jayco AlUla nın Hollandalı sprinteri Dylan Groenewegen kazandı!',
            location: {
                center: [5.050, 47.315],
                zoom: 15,
                pitch: 60,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 7',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/7/54051/0:0,1005:603-960-0-90/f43e1',
            description: 'Tour de France 2024 ün ilk bireysel zamana karşı yarışı Nuits-Saint-Georges Gevrey-Chambertin arasında 25.3 kilometrelik bir mücadeleye sahne oldu.',
            location: {
                center: [4.952, 47.140],
                zoom: 16,
                pitch: 70,
                bearing: 295
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7f',
            alignment: 'right',
            hidden: false,
            title: 'İlk etap galibiyeti: Remco Evenepoel',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-hp-etape-7-1/57966/0:0,2000:890-2400-0-70/a73b2',
            description: 'İlk Tour de France ine katılan Soudal Quick-Step in lideri Remco Evenepoel etap galibiyetiyle tanıştı. Müthiş bir efora sahne olan etapta Remco, Tadej Pogacar ın 12 saniye önünde yarışı tamamladı. <img src="https://todaycycling.com/wp-content/uploads/2024/07/tour-de-france-2024-etape-7-classement-complet.jpg">',
            location: {
                center: [4.975, 47.228],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 8',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/8/54050/0:0,1005:603-960-0-90/2141e',
            description: 'Semur-En-Auxois Colombey-Les-Deux-Églises arası koşulan 183.4 kilometrelik sprint etabı yine bir toplu finişe sahne oldu.',
            location: {
                center: [4.337, 47.492],
                zoom: 15,
                pitch: 75,
                bearing: 75
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8f',
            alignment: 'left',
            hidden: false,
            title: 'Biniam Girmay tarih yazmaya devam ediyor!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-png/header-hp-etape-8-min/58172/0:0,2000:890-2400-0-70/52de0',
            description: 'Eritreli sprinter ikinci etap galibiyetini kazanırken, yeşil mayoyu korumak için iddialı olduğunu gösterdi.',
            location: {
                center: [4.889, 48.225],
                zoom: 15,
                pitch: 75,
                bearing: 300
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 9',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/9/54057/0:0,1005:604-960-0-90/76911',
            description: 'Tour de France te ilk hafta 14 toprak sektörün bulunduğu klasik görünümlü 9. etapla Troyes te kapandı.',
            location: {
                center: [4.540, 48.191],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9f',
            alignment: 'right',
            hidden: false,
            title: 'Beyaz etabın kazananı Turgis',
            image: 'https://www.francebleu.fr/s3/cruiser-production/2023/10/3cd48b92-e65f-40b2-a219-bb58ae281d74/1200x680_sc_cheminsblancsbarsuraubeernard-papongetty.jpg',
            description: 'Tozun dumana katıldığı etabı Total Energies sporcusu Antony Turgis kazandı. Böylelikle Total Energies Tour de France 2024 ün ilk etap galibiyetini elde etti. <img src="https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-hp-etape-9-2/58401/0:0,2000:890-2400-0-70/fc7f4">',
            location: {
                center: [4.540, 48.191],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 10',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/10/54047/0:0,1005:603-960-0-90/75896',
            description: 'Orleans Saint-Amand-Montrond arası geçilen 187.3 kilometrelik düz etap toplu sprintle tamamlandı.',
            location: {
                center: [1.912,47.870],
                zoom: 15,
                pitch: 75,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10f',
            alignment: 'left',
            hidden: false,
            title: 'Jasper Philipsen',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpeg/photosprint-2024-10/58681/0:0,1200:800-1000-0-70/db0f0',
            description: '2023 ün yeşil mayo sahibi, Alpecin-Deceuninck in Belçikalı yıldızı Jasper Philipsen, etabı Girmay ın önünde tamamlayarak ilk etap galibiyetini kazandı. <img src="https://img.aso.fr/core_app/img-cycling-tdf-png/header-hp-stage-10-min/58685/0:0,2000:890-2400-0-70/d545e">',
            location: {
                center: [2.393,46.808],
                zoom: 12,
                pitch: 65,
                bearing: 130
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 11',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/11/54055/0:0,1005:603-960-0-90/b3a87',
            description: '211 kilometrelik dağ etabı ÉVAUX-Les-Bains ten başlayarak Le Lioran da tamamlandı.',
            location: {
                center: [1.796,45.664],
                zoom: 8,
                pitch: 0,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11f',
            alignment: 'right',
            hidden: false,
            title: 'Vingegaard geri döndü!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpeg/photosprint-2024-11/58883/0:0,1200:800-1000-0-70/55f7d',
            description: 'Henüz geçtiğimiz aylarda Bask bisiklet turunda kaza geçirip ölümden dönen Visma-Lease a Bike ın Danimarkalı yıldızı Jonas Vingegaard rakibi Pogacar ı sprintte geçerek etap galibiyetini göğüsledi. <img src="https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-hp-etape-11/58893/0:0,2000:890-2400-0-70/5ad2d"> Son iki Tour de France in galibi Jonas Vingegaard formsuz geldiği 2024 turunda etap kazanarak büyük bir geri dönüşe ima attı.',
            location: {
                center: [2.750,45.091],
                zoom: 15,
                pitch: 75,
                bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 12',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/12/54062/0:0,1005:603-960-0-90/0960b',
            description: 'Tour de France in 12. etabı, Aurillac tan başlayıp Villeneuve-Sur-Lot ta noktalanan 203.6 kilometrelik düz etaba sahne oldu.',
            location: {
                center: [2.366,44.899],
                zoom: 12,
                pitch: 60,
                bearing: 200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12f',
            alignment: 'left',
            hidden: false,
            title: 'Girmay yine zirvede',
            image: 'https://pbs.twimg.com/media/GSN1m18XMAEGWe3?format=jpg&name=large',
            description: 'Intermarche-Wanty nin yıldız ismi Biniam Girmay, Wout Van Aert ın önünde tamamladığı sprint ile üçüncü kez etap galibiyeti elde ederek tüm Afrika kıtasını gururlandırmayı sürdürdü. <img src=" https://img.aso.fr/core_app/img-cycling-tdf-jpg/podium-vert/59099/0:0,1200:800-1000-0-70/a4b1b">',
            location: {
                center: [0.717,44.417],
                zoom: 12,
                pitch: 60,
                bearing: 200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 13',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/13/54056/0:0,1005:604-960-0-90/b3e90',
            description: '165.3 kilometrelik 13. etap, Agen - Pau arasında geçildi.',
            location: {
                center: [0.370,44.116],
                zoom: 10,
                pitch: 80,
                bearing: 200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13f',
            alignment: 'right',
            hidden: false,
            title: 'Jasper Philipsen ikiledi',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/et13-960-x-800-jpg/59277/0:0,960:800-1920-0-70/aa392',
            description: 'Jasper Philipsen (Alpecin-Deceuninck), Pau daki son düzlükte gösterdiği mükemmel ivmeyle, 13. etapta 2024 Tour de France ın ikinci galibiyetini garantiledi. Philipsen, telaşlı bir etabın sonunda Wout van Aert (Visma-Lease a Bike), Pascal Ackermann (Israel-Premier Tech), Biniam Girmay (Intermarche-Wanty) ve Nikias Arndt ı (Bahrain Victorious) geçerek etap galibiyetini kazandı.',
            location: {
                center: [-0.376,43.304],
                zoom: 13,
                pitch: 80,
                bearing: 200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 14',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/14/54052/0:0,1005:603-960-0-90/f96ac',
            description: 'Pau Saint-Lary-Soulan Pla Dadet arası koşulan 151.9 kilometrelik Pirenelerin ilk dağ etabı genel klasmancıların muhteşem bir rekabetine sahne oldu.',
            location: {
                center: [-0.315,43.302],
                zoom: 15,
                pitch: 80,
                bearing: 100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '14f',
            alignment: 'left',
            hidden: false,
            title: 'Tadej zirve mücadelesini sürdürüyor!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/depart-006/59397/0:0,1200:800-1000-0-70/5040b',
            description: 'Sarı mayolu Sloven yıldız Tadej Pogacar, son tırmanışta yaptığı efsanevi atakla Danimarkalı fenomen Jonas Vingegaard ın 39 saniye, Remco Evenepoel in 1 dakika 10 saniye önünde etabı tamamladı. <img src="https://pbs.twimg.com/media/GSYK4KFXAAAz_3V?format=jpg&name=large">',
            location: {
                center: [0.326,42.820],
                zoom: 13,
                pitch: 65,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'genel1',
            alignment: 'fully',
            hidden: false,
            title: 'Genel klasmanda Tadej Pogacar damga vurdu!',
            image: 'https://pbs.twimg.com/media/GSYL24AWgAA124D?format=jpg&name=large',
            description: '14. etap sonucu Tadej Pogacar zirvedeki yerini güçlendirdi.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 15',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/15/54063/0:0,1005:603-960-0-90/4757c',
            description: 'Loudenvielle - Plateau de Beille arasında geçilen 197.7 kilometrelik Pirenelerin ikinci etabı yine beklendiği gibi genel klasmancıların mücadelesine sahne oldu.',
            location: {
                center: [0.415,42.799],
                zoom: 15,
                pitch: 75,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15f',
            alignment: 'right',
            hidden: false,
            title: 'Pirenelerin sefiri: Tadej Pogacar',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee-003/59791/0:0,1200:799-1000-0-70/18260',
            description: 'Tour de France te iki günlük büyük genel klasman serisinin ikinci gününde de kader değişmedi: Pogacar, herkesten önde istediğini aldı, bu kez 1 dakikanın üzerinde farkla kazandı!',
            location: {
                center: [1.680,42.743],
                zoom: 13,
                pitch: 80,
                bearing: 180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 16',
            image: 'https://pbs.twimg.com/media/GSmjJOzXsAAXUEu?format=jpg&name=large',
            description: 'Zorlu Pireneler sonrası, Tour de France in son haftasına 188.6 kilometrelik düz etapla başladık.',
            location: {
                center: [3.097,43.115],
                zoom: 14.6,
                pitch: 80,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '16f',
            alignment: 'left',
            hidden: false,
            title: 'Jasper Philipsen üçledi!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpeg/photosprint-2024-16/59981/0:0,1200:800-1000-0-70/bc7cf',
            description: 'Nîmes te gerçekleşen toplu sprint finişiyle tamamlanan 16. etabı Jasper Philipsen (Alpecin-Deceuninck) kazandı! <img src="https://img.aso.fr/core_app/img-cycling-tdf-png/header-hp-stage16-min/59987/0:0,2000:890-2400-0-70/eaf33">',
            location: {
                center: [3.538,43.992],
                zoom: 7.64,
                pitch: 0,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 17',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/17/54065/0:0,1005:603-960-0-90/68d55',
            description: 'Saint-Paul-Trois-Châteux tan başlayarak SuperDevoluy da noktalanan yarı dağlık 17. etap genel klasmancılar için görece sakin geçerken, etap galibiyeti için mücadele eden takımların yarışına sahne oldu.',
            location: {
                center: [4.863,44.342],
                zoom: 11.2,
                pitch: 60,
                bearing: 80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '17f',
            alignment: 'right',
            hidden: false,
            title: '17. etabın galibi: Carapaz',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-png/header-hp-vainqueur-e17-min/60174/0:0,2000:890-2400-0-70/46028',
            description: 'EF Education ın Ekvatorlu olimpiyat şampiyonu Richard Carapaz SuperDevoluy finiş çizgisini Simon Yates in 37 saniye önünde geçti.',
            location: {
                center: [5.967,44.692],
                zoom: 13,
                pitch: 65,
                bearing: -100
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 18',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/18/54066/0:0,1005:604-960-0-90/8331e',
            description: 'Yarı dağlık 18. etap Gap-Barcelonnette arasında geçildi.',
            location: {
                center: [6.061,44.578],
                zoom: 13,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '18f',
            alignment: 'left',
            hidden: false,
            title: 'Victor Campenaerts turun son haftasında etap galibiyeti almayı başardı',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/header-e18-arrivee/60374/0:0,2000:890-2400-0-70/c01b1',
            description: 'Tour de France 18. etabını kaçış grubuna dahil olan Lotto-dstny yıldızı Victor Campenaerts kazandı. 5 kilometrelik son sektörde Kwiatkowski, Vercher ve Campenaerts, arkalarındaki takip eden grupla aralarında bir fark açmak için iyi bir işbirliği yaptı. 15 kilometre kala öndeki üçlü, en yakın beş takipçiye karşı avantajlarını 40 saniyenin üzerine çıkarmayı başardı. Etabın son metrelerinde Campenaerts rakipleri için çok güçlü olduğunu kanıtladı ve bitiş çizgisine kadar onları geride bıraktı.',
            location: {
                center: [6.625,44.388],
                zoom: 13,
                pitch: 75,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 19',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/19/54059/0:0,1005:604-960-0-90/e71d0',
            description: 'Embrun dan başlayan 144.6 kilometrelik zorlu dağ etabı Isola 2000 de son buldu.',
            location: {
                center: [6.515,44.568],
                zoom: 13,
                pitch: 75,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '19f',
            alignment: 'right',
            hidden: false,
            title: 'Pogacar şampiyonluğa gidiyor!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee/60591/0:0,1200:799-2400-0-70/9489b',
            description: 'Genel klasman mücadelesinde kritik günde Tadej Pogacar (BAE Team Emirates), yarışın bitimine iki gün kala Isola 2000i fethederek Kraliçe Etapta, podyum rakipleri Jonas Vingegaard (Visma-Lease a Bike) ve Remco Evenepoel (Soudal-Quick Step) karşısında lider pozisyonunu güçlendirdi. Sloven yıldız Tadej Pogacar 4. etap galibiyetini şöyle kutladı: <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4N6OX6Q5F5JRZADTFEC3O4ZHIA.jpg">',
            location: {
                center: [7.134,44.197],
                zoom: 13,
                pitch: 75,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20s',
            alignment: 'left',
            hidden: false,
            title: 'Etap 20',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/20/54067/0:0,1005:604-960-0-90/d5c2f',
            description: 'Nice ten başlayan 132.8 kilometrelik son dağlık etap, Col de la Couillole de son buldu.',
            location: {
                center: [7.284,43.714],
                zoom: 15,
                pitch: 75,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '20f',
            alignment: 'left',
            hidden: false,
            title: 'Yenilmez!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee/60864/0:0,1200:801-1000-0-70/eaa2c',
            description: 'Son dağlık etap genel klasmancıların mücadelesine sahne oldu. Şampiyonluğu neredeyse garantileyen Tadej Pogacar muazzam eforunu sürdürdü. En büyük rakibi Jonas Vingegaard ile çekişmeli bir son bölüm izleten Pogacar, 2024 Tour de France taki 5. etap galibiyetini kutladı. <img src="https://img.aso.fr/core_app/img-cycling-tdf-png/header-hp-stage-20-min/60838/0:0,2000:890-2400-0-70/50e2d">',
            location: {
                center: [7.046,44.089],
                zoom: 13,
                pitch: 80,
                bearing: -85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '21s',
            alignment: 'right',
            hidden: false,
            title: 'Etap 21',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/21/54060/0:0,1005:603-960-0-90/85462',
            description: 'Kuruluşundan beri her sene Paris te bir geçit töreni gibi geçen son etap, turun 2024 Paris olimpiyatlarıyla çakışması sebebiyle, alışılmışın aksine Monaco-Nice arası rekabetçi bir bireysel zamana karşı ile son buldu.',
            location: {
                center: [7.420,43.734],
                zoom: 15,
                pitch: 70,
                bearing: -30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '21f',
            alignment: 'right',
            hidden: false,
            title: 'TADEJ POGACAR!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-png/prehome-1-stage21-min/61059/0:0,960:800-1920-0-70/d53a3',
            description: 'Şampiyonluğu kaybetmesi mucizelere bağlı olmasına rağmen inanılmaz bir efor sarfeden Sloven yıldız Tadej Pogacar, son etabı da ezici bir üstünlükle tamamladı.',
            location: {
                center: [7.254,43.691],
                zoom: 14,
                pitch: 80,
                bearing: -85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'genel2',
            alignment: 'fully',
            hidden: false,
            title: 'Tadej Pogacar üçüncü kez Tour de France şampiyonu oldu',
            image: 'https://pbs.twimg.com/media/GTB268EWsAEvC6Z?format=jpg&name=large',
            description: '25 yaşındaki Pogacar, Tour de France 2024ü, Vingegaard ın 6 dakika 17 saniye önünde tamamladı.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'genel3',
            alignment: 'fully',
            hidden: false,
            title: 'Vingegaard ikinci, Evenepoel üçüncü oldu',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee-023/61100/0:0,1200:800-1000-0-70/1638f',
            description: 'Jonas Vingegaard büyük kaza sonrası kısa sürede geldiği Tour de France i ikinci tamamlayarak büyük bir başarıya imza attı. Remco Evenepoel ise ilk Tour de France ini üçüncü tamamladı.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'genel4',
            alignment: 'fully',
            hidden: false,
            title: 'Giro-Tour dublesi',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee-008/61086/0:0,1200:797-1000-0-70/d172e',
            description: 'Tadej Pogacar aynı yıl içinde Giro ve Tour de France kazanarak 38 yıl sonra bir ilke imza attı.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'genel5',
            alignment: 'fully',
            hidden: false,
            title: 'Biniam Girmay yeşil mayonun sahibi oldu',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee-018/61093/0:0,1200:800-1000-0-70/4362e',
            description: 'En çok puan toplayan sprinterlere verilen yeşil mayoyu Eritreli sprinter Biniam Girmay kazandı. Girmay, Afrikalı bisikletçiler için bir ilke imza attı.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'genel6',
            alignment: 'fully',
            hidden: false,
            title: 'Dağların Kralı Richard Carapaz!',
            image: 'https://img.aso.fr/core_app/img-cycling-tdf-jpg/arrivee-017/61098/0:0,1200:800-1000-0-70/297c2',
            description: 'Ekvatorlu olimpiyat şampiyonu, EF Education adına büyük bir başarıya imza atarak polkadots mayonun sahibi oldu.',
            location: {
                center: [3.52341, 46.31748],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
