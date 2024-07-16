'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "89f0be5f214746f9c03cff1ea4e60eb1",
"assets/AssetManifest.bin.json": "9a295113b096e93b2c5325dc05f6778b",
"assets/AssetManifest.json": "dd9f4e1fcf72f413e4e152fc494f1361",
"assets/assets/country/Australia.png": "019111a93e122260bf9fcddc3aee39b8",
"assets/assets/country/Canada.png": "6288313818898f31afb64691d39f8a16",
"assets/assets/country/Germany.png": "8f239dbab7c479e495cf1500dbeb8891",
"assets/assets/country/Switzerland.png": "6afc50102cf4ea6b6307fc2cc31f59c3",
"assets/assets/country/usa.png": "765fba7c2b8e5049d8429e5bd2eb9184",
"assets/assets/fonts/Nunito-Black.ttf": "18f25c22e665649aaf09be87bc6f23bb",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "004ce174f09a95594c74016b9a8333e8",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "4c3094fa4bad68656f343116ebb3dae0",
"assets/assets/fonts/Nunito-Light.ttf": "42405ee88f303e033d1ff57280f9cffc",
"assets/assets/fonts/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Nunito-SemiBold.ttf": "45db66b4d9dff8842f4a8e5e3deb2f94",
"assets/assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/Raleway-Black.ttf": "35e0e2e7a5b03275ba569a214edbab77",
"assets/assets/fonts/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/assets/fonts/Raleway-ExtraLight.ttf": "550ad10fece0b35b0325d38192701592",
"assets/assets/fonts/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/assets/fonts/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/assets/fonts/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/assets/fonts/Raleway-Thin.ttf": "db8e7354e2585143a4f7ef6f71bfe0ca",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/hospital/bntUpdate.svg": "2f0b91be0fc3ba2730cfbc8d31b9b40a",
"assets/assets/hospital/btnEdit.png": "31da3dbb1482587439e4a4374149310e",
"assets/assets/hospital/btnRecovered.png": "bb239eb81703b39e17c8de46d7635916",
"assets/assets/hospital/chats.svg": "d66d173983d5f499a89e0be287891a58",
"assets/assets/hospital/check-circle.svg": "10a3bc179d863c5438ace3cb9821d942",
"assets/assets/hospital/crm_logo.png": "1271bb06552ada6e29340f307c8889e6",
"assets/assets/hospital/dashboard.svg": "11db1fca545ed2f714a543602f5aaad4",
"assets/assets/hospital/doctor.svg": "62727245e1e7e20c01901fc74a4cb206",
"assets/assets/hospital/edit.svg": "d1c805826669943198464bc3ce71dee5",
"assets/assets/hospital/email.svg": "365d87749e24f56808732aa5da044b35",
"assets/assets/hospital/facebook.svg": "882fab76933d914055e935f276db2aee",
"assets/assets/hospital/graph_left.svg": "53334fa5c2e3896812e97c99db4e7359",
"assets/assets/hospital/graph_right.svg": "e285e1cc545d4a5c6c43cf4e729ee36a",
"assets/assets/hospital/heart_rate.svg": "9e2454b2b05c34a39335b479ca5bd219",
"assets/assets/hospital/hospital_icon.png": "24ae687824d9e2826408ea59a01eab81",
"assets/assets/hospital/ic_back_page.svg": "b3bdeaffdd3850a9132ebc8b5ae87a6f",
"assets/assets/hospital/ic_calendar.svg": "9b5e88f5338c415499d9f3df6c54d359",
"assets/assets/hospital/ic_calendar_white.svg": "6d3fe0fe7f04b7772ebcc8cd3a21c4bc",
"assets/assets/hospital/ic_chevron_left.svg": "9b2eeb4568e3cdf3c29e04931bb58705",
"assets/assets/hospital/ic_chevron_right.svg": "a8a73d6158c5e56ae3678c6c88bef975",
"assets/assets/hospital/ic_dashboard.svg": "66b165df7a61d3afe542ca2615ce36e4",
"assets/assets/hospital/ic_delete.svg": "f97e993dfdb64eb9e7fdf7e88b18402d",
"assets/assets/hospital/ic_department.svg": "5f6688dd14a1721a48f6cc78cbe2fc4e",
"assets/assets/hospital/ic_dollar.svg": "e610940f11849b92cfaedb57ade1bd64",
"assets/assets/hospital/ic_down_arrow.svg": "cd42712e216311932cb786116f69dded",
"assets/assets/hospital/ic_heart.svg": "6146ec2d6b7199d206861e6aa9c904ca",
"assets/assets/hospital/ic_menu.svg": "07f71658644c782c44e41187f1d1256a",
"assets/assets/hospital/ic_next_page.svg": "b6a1d9d180d547d16a3b1cdec6a3d995",
"assets/assets/hospital/ic_setting.svg": "9e0e8e73592db261e5ad35148306b86d",
"assets/assets/hospital/ic_setting_white.svg": "2ff55cafe6d0c060a2da7082842d3837",
"assets/assets/hospital/ic_sort.svg": "c39f01076867b659d30411a1c654b8d7",
"assets/assets/hospital/ic_stepper.png": "dd977a7e60e70697abdca3eaac78e46b",
"assets/assets/hospital/ic_user.svg": "d21c9a3019e4c41160adc0b7b35aee93",
"assets/assets/hospital/instagram.svg": "f6a1d8ff23c7eeaa53ddd6e95a1d09aa",
"assets/assets/hospital/mail.svg": "59de07a1e0b38c7175cb32796e53e47d",
"assets/assets/hospital/male.svg": "e00148559bf7279501062a1e09d08776",
"assets/assets/hospital/map-pin.svg": "0de0f2227f588ac304debb6b8a17919a",
"assets/assets/hospital/map.svg": "4d05900782c1a75debce2c91bff7c1b6",
"assets/assets/hospital/mapThumb.png": "2fc7ddd0679b1d59727a5e3c573e9303",
"assets/assets/hospital/next.svg": "2250a35d2f61a94825f613f221b1109e",
"assets/assets/hospital/notifications.svg": "77fd10c1265c969347020c5ebf33ea80",
"assets/assets/hospital/patient.svg": "84b960e28d76abf447751b1073c067ba",
"assets/assets/hospital/patient_care.svg": "eb0b339f5f075fba4876d9bdab85e384",
"assets/assets/hospital/phone.svg": "3826a43cd3474207c7f350a0cc24779a",
"assets/assets/hospital/previous.svg": "1b448abc46ad4aa352b7a2699faf62f2",
"assets/assets/hospital/promos.svg": "36c016d93dc9ecb957ebb59c129ae48a",
"assets/assets/hospital/review.svg": "e8823528cbc18e359a0941ebe8314a5a",
"assets/assets/hospital/review1.svg": "5d730d118dca38d0e74c7b95d6dfe60d",
"assets/assets/hospital/search.svg": "7c37606a30d971bf6f0734bfc454efff",
"assets/assets/hospital/star.svg": "4761ac5aa817c129c167c58802b30ce9",
"assets/assets/hospital/stethoscope.svg": "741d307307b3a17ba9f50ef7100e3924",
"assets/assets/hospital/twitter.svg": "d1dedfe77ec22cfe5171524be4c6eed5",
"assets/assets/hotel/bed.svg": "93531caef7547157f64ef4b72f9df98e",
"assets/assets/hotel/booking.svg": "2747eece625f8dfd03fdfc3cb60866f8",
"assets/assets/hotel/check_in.svg": "606a9fc12f02b6805d10f13eaac4d23e",
"assets/assets/hotel/check_out.svg": "c7479a67f0092ae98d7492381eff2b57",
"assets/assets/hotel/deluxe_room.jpg": "c9415f524bf0f2abcf371c24012a8234",
"assets/assets/hotel/duplex.jpeg": "21b43f2d006be183506149472a249d4f",
"assets/assets/hotel/edit-text.svg": "3210d60e7035cc981d6124b3335966cb",
"assets/assets/hotel/family_room.jpeg": "80e778a934b5763cf0bc2e161518150c",
"assets/assets/hotel/google.png": "ddad59f18466fe27533cd9b0a4198749",
"assets/assets/hotel/hotel.svg": "1c690b604a483bac85e701b7c5d2d144",
"assets/assets/hotel/hotel_room.jpg": "05bfe613439240aa0d27f3eeca034b79",
"assets/assets/hotel/hotel_room1.jpg": "bcb715e55e099370adbbef10624dbf2f",
"assets/assets/hotel/hotel_room2.jpg": "78adc9d322a7399e93fd4272ce297c03",
"assets/assets/hotel/luxury_room.jpeg": "ba452514029f755a9b9b68044f147a46",
"assets/assets/hotel/penthouse.jpeg": "084377561de75db4341285714e6e76de",
"assets/assets/hotel/reservations.svg": "79d7faea7fb0feda3bb5bf7993f5598d",
"assets/assets/hotel/room_reservation.svg": "ab1ada3528cd1f43e457557672cb280e",
"assets/assets/hotel/standard_room.jpeg": "4f862379c96f916aaa1c5af46c46753e",
"assets/assets/hotel/trash.svg": "e8a791a7077054ee4ccbc70012b50dde",
"assets/assets/icons/add-square.svg": "75b48e5373a78db888bcc09fff6e1c8b",
"assets/assets/icons/Admin_Kit.svg": "112a9245c295933c62a79e1c43547e27",
"assets/assets/icons/Admin_Kit_Text.svg": "83444bf32f37fa56f05cd376a407b55a",
"assets/assets/icons/archive-2.svg": "257aed45c13d4c9c0aef68ac2fa4942e",
"assets/assets/icons/arrow-down-2.svg": "8d51082b5b0e7049dd7e0ca75cca298b",
"assets/assets/icons/arrow-left.svg": "f7629d0bed76bdfa0334197ebfbd376f",
"assets/assets/icons/arrow-right-2.svg": "b1f3d57d5bf7e890979a1afc3dba5b71",
"assets/assets/icons/arrow-right-3.svg": "23c2c9d819a63b05e1603cb8d3cf3d2c",
"assets/assets/icons/Auth_BG.svg": "fdd25a56e960da7b40477b5445cd389f",
"assets/assets/icons/box-1.svg": "d4823118939fd7e55d45ce315cccbf10",
"assets/assets/icons/buildings.svg": "18671ee0073fbd37e0ae80fd6a101a8c",
"assets/assets/icons/calendar-2.svg": "2aae57287e1b2b2e3e404be13991a2bf",
"assets/assets/icons/camera.svg": "ac1b2a2ff366a27d6709dab14d210eba",
"assets/assets/icons/category.svg": "f0a683f88d44cbe6f5fc836847e327db",
"assets/assets/icons/chart-pie.svg": "735a9bed6f383f66c54eff81829555f3",
"assets/assets/icons/checkbox-circle.svg": "e8f595ed71780ed2ba1804ee5f2a5935",
"assets/assets/icons/close-square.svg": "0317f1543ced906959e3f4c07599a2c9",
"assets/assets/icons/cloudcomputing.svg": "5f6826be3c1f3e31d8cb0d53cca655eb",
"assets/assets/icons/crm.svg": "b61a7a98f7da9fc9ed0b2dd87ee7d048",
"assets/assets/icons/facebook.svg": "35b49d77b2359b18e4284ad132dda413",
"assets/assets/icons/grid-2.svg": "653127c6fc167b907c7c893cc5c73097",
"assets/assets/icons/home-2.svg": "8b932e5078b2a9fcf9efc5d1bc48ab54",
"assets/assets/icons/hrm.svg": "11a796d8b3db31c821daef7c6e194e3c",
"assets/assets/icons/maintenance.svg": "6b55860659533f39c09be55d607569f6",
"assets/assets/icons/map.svg": "6e87a89eafa16fe9670faaf16199190c",
"assets/assets/icons/notification-1.svg": "99ab95977d868d3c43598eacb2dfee7c",
"assets/assets/icons/pin.svg": "c275d7a2a9f402ea85fae1d00f15f5ab",
"assets/assets/icons/receipt-2-1.svg": "52f27d588b2ce5066b6384e839c0f988",
"assets/assets/icons/search-normal-1.svg": "8baf9fb049be258126141f992d769fcf",
"assets/assets/icons/setting-2.svg": "87878c4a03c84e822ef1f0d3358c62ba",
"assets/assets/icons/shop.svg": "44821f90e71389a9560ca32e11750982",
"assets/assets/icons/sms.svg": "f2b11be8bda81c32145aef56b3ac23cb",
"assets/assets/icons/trash.svg": "ead85f7ad0d4383a3972374b2ec95fe3",
"assets/assets/icons/twitter.svg": "1d1bf5b7f02c61afe47a503bbf858e0e",
"assets/assets/icons/verify.svg": "9f1610989570c5006d029cf8e641f46b",
"assets/assets/images/app.png": "941ffb2f3fad44788db23bf44d5957a7",
"assets/assets/images/arm_chair.jpeg": "e25a536b41630921785dea57333e045b",
"assets/assets/images/art_design.png": "c96f06e13f63c0f72eeedbf5c07021ef",
"assets/assets/images/Auth-BG.png": "6a6a2df7a7c62e7e79376ae8906be29e",
"assets/assets/images/bag.jpeg": "3a9cbad02095063bbd1bb783096e7937",
"assets/assets/images/bag.png": "42c3a706edbcf0fe888bec6de3d48135",
"assets/assets/images/bagcat.webp": "b430274b24c11c17dee42faf5f4dfaf3",
"assets/assets/images/black_dress.jpeg": "9cf5b631a11e8acfa23396497f15a5bc",
"assets/assets/images/black_dress2.jpeg": "ee43534abe6af01948f546d0ea344b5f",
"assets/assets/images/black_dress3.jpeg": "dcf7efe2ff86d711a02cb5c8c285da0a",
"assets/assets/images/black_dress4.jpeg": "8557be706f0ebf53ac7d31c8137f69db",
"assets/assets/images/black_shirt.jpeg": "8eda28a750ef333c91e672aaf5399854",
"assets/assets/images/books.png": "e4f39ebca2fcce459ed9d284443b6c1c",
"assets/assets/images/b_cup.jpeg": "474ffeee32f812e52c7af5eea2e9d5fd",
"assets/assets/images/c1.jpeg": "7dd3776097da93ad0ac0cff1db45e907",
"assets/assets/images/c2.jpeg": "a088c40cde7d3374290e88f42e80421e",
"assets/assets/images/c3.jpeg": "6d4414dbffdeac0c40836915890f87a6",
"assets/assets/images/cancellation_policy.png": "7f4b72c2078cc49e5a2d758ab0de4fe3",
"assets/assets/images/cap.png": "d7df33e64d4789e205ea6aa096417a91",
"assets/assets/images/casual.webp": "14a4bbb0be531efec1c00d08345c0446",
"assets/assets/images/chair.jpeg": "ba0f67ea1af6b5e9df462c31d8e7d013",
"assets/assets/images/cloth.png": "1f081433564634424ef5c33ab5d0402a",
"assets/assets/images/crafts.png": "afdfe7d9d069aed7e91849615c445af0",
"assets/assets/images/crm_profile.png": "a37f82c5578e4d1adafbcbea5fa9f6a9",
"assets/assets/images/dark.png": "d8b29e65064977fa8a27c975d571d142",
"assets/assets/images/delivery_policy.png": "9f1cfd99c9d7a0be634c51b910125480",
"assets/assets/images/dining_chair.jpeg": "5afada18e97476710f4e0e7d63cd1370",
"assets/assets/images/ecommerce.svg": "744e093634a79cb8dc4bf09bfeb18885",
"assets/assets/images/electronic.png": "03ac7b94e15f18a4e8d3d224e37e6a0f",
"assets/assets/images/entertainment.png": "7b98eaff533b27b8efac4f06805a5714",
"assets/assets/images/error-404.svg": "af59b51e4422dbf2ab61c43d336b4218",
"assets/assets/images/error-500.svg": "9e45ec6665fe6bd586e2ac021bd42303",
"assets/assets/images/eyeswear.webp": "2978c4aad33b7eacb20bba73009c8a56",
"assets/assets/images/facebook.png": "d16c261b5fa420fb9db0d6f37f5baf5a",
"assets/assets/images/fancy_bag.jpeg": "cf0e2d9e755a063b559980b292b50e92",
"assets/assets/images/filter.png": "3e41adabfd181693fee7fa60cf32296f",
"assets/assets/images/fire.png": "78f7445bc271c0000a302cfb61cb2304",
"assets/assets/images/flipflop.webp": "21471877b08ccb848b1e66c811f616de",
"assets/assets/images/footwear.jpeg": "4134cdd0a141a9a35194f00cfbddf872",
"assets/assets/images/g1.jpeg": "0724c973e2914be68400ac16f8ab3e11",
"assets/assets/images/g2.jpeg": "69c9e5e3e30777a99a8922d1f2e58445",
"assets/assets/images/g3.jpeg": "9e3e366edc4f87cf0917f5589f7704c4",
"assets/assets/images/g4.jpeg": "ff404ecf4f25967ecdb9e0dda72c66b4",
"assets/assets/images/g5.jpeg": "3bc5992c20d233979181e5b9242eeea0",
"assets/assets/images/g6.jpeg": "83783c7258083843dadef0145132090e",
"assets/assets/images/g7.jpeg": "b3fd442d834248825472b1708795de35",
"assets/assets/images/g8.jpeg": "077d44dde4a892a68b5b4f79541e3fbe",
"assets/assets/images/g9.jpeg": "ea6028c68d05c8fcd9d709771764f196",
"assets/assets/images/gadgets.png": "01d50c81457e90a0eca8d1953750d990",
"assets/assets/images/galaxy22.jpeg": "105c1d4eba5dc229ce0288c098840290",
"assets/assets/images/games.png": "d9f598c4ab8fd6111e893804279820d5",
"assets/assets/images/gas_stove.jpeg": "dacddf263aed8c5838c2cec8a88ac667",
"assets/assets/images/grocery.png": "d33b53da952597889569fb343607991f",
"assets/assets/images/image1.png": "50b34ac51c530c81d3b94a86b927c6d9",
"assets/assets/images/instagram.png": "6d9870c6c49c48401897a3caf6c8daa3",
"assets/assets/images/iphone.jpeg": "ef173bd9400b9989e925409fe4613629",
"assets/assets/images/jewellery.png": "1d9d21c9d69e24d607dad96523ec0977",
"assets/assets/images/kitchen.png": "9c2e2c82d30de2bf0f2ddadcab20a8c1",
"assets/assets/images/lady_gaga.jpeg": "4d0b3ae444803d250fbe1620f5a95e97",
"assets/assets/images/light.png": "ef5119e1c42ff149253302e0c8a819bf",
"assets/assets/images/likendin.png": "23ff3f39a71e91aa3c49c57813fb6e1b",
"assets/assets/images/login-bg.jpg": "64bd8e3cbc7693040d3b055a008e8b0d",
"assets/assets/images/logo-dark-lg-old.png": "5d39d74988339152cc4a10d29340a942",
"assets/assets/images/logo-dark-lg.png": "207993461b9cedfb95da84796cc170bd",
"assets/assets/images/logo-light-lg-old.png": "37bc14787d2256795be892ad6f27d54c",
"assets/assets/images/logo-light-lg.png": "5561d4d2204f58590be9ea97a585c5d7",
"assets/assets/images/logo-light.png": "47437d73bac05d0fb68b2e16b48967fb",
"assets/assets/images/logo-sm-old.png": "2b3e3211dd01969477110dfbbd611046",
"assets/assets/images/logo-sm.png": "847043d6590c171daab8e1d881668485",
"assets/assets/images/maintenance.png": "4708bf7b9c7eae5075593eee0100193a",
"assets/assets/images/makeup.png": "3f828aaa5d07842a302c8b9bb29fc69d",
"assets/assets/images/makeupcat.webp": "0520ee26496f3a2837423541bbe34e6f",
"assets/assets/images/mastercard.png": "e4940e2a74966892c29e6b1d4be7c755",
"assets/assets/images/men.png": "3b69951d65c061fd25cd97e78b103326",
"assets/assets/images/murgs.jpeg": "0f6608459a3155cf3aa925a34ef91fa4",
"assets/assets/images/music.png": "bf689a21f42ab5f53ea4d9472537fa05",
"assets/assets/images/offer_image.jpg": "9debb93a03ae89fa0dafd3e6a0ebd63b",
"assets/assets/images/offer_image1.jpg": "e43dc30c37da512bc6ed488f216a6379",
"assets/assets/images/offer_image2.jpg": "226cefdab2f7801f72c67ad2fc4bb2e4",
"assets/assets/images/one_plus_tv.jpeg": "d596069c03071323f4f8416a2cdbb3f8",
"assets/assets/images/persons.svg": "11984b61bb74dc8f1577492d58dc28f5",
"assets/assets/images/photography.png": "0ce6767230b0ad3596ecb0c664f76976",
"assets/assets/images/pink_shirt.jpeg": "998ee6d4544c47abbd78637417a5b7dc",
"assets/assets/images/play.png": "e481cce2de3cecf9161636e7b2fe89e8",
"assets/assets/images/play_game.jpeg": "b964656be9d9df9f3d9a925bdb645dae",
"assets/assets/images/printress.png": "ebf5b268a400e30863171b147c457555",
"assets/assets/images/privacy_policy.png": "a1da1cf9b20e7e62c0182898dcd68ba1",
"assets/assets/images/profile.jpeg": "1bfa2288a849de76482192038cc98c18",
"assets/assets/images/samsung_tv.jpeg": "c219e6ae82c40f905e3ec8245b01911b",
"assets/assets/images/shoes.png": "50d852dba6f12a47dc7cee9747882a9f",
"assets/assets/images/sports.png": "f492f9b36ec85d7125ae424396d7ddd0",
"assets/assets/images/sportwear.jpeg": "0a82e0c9d44fa061236472afeef3899d",
"assets/assets/images/t-shirt.png": "11bdd84f6573c3a264696103ab292af9",
"assets/assets/images/t-shirt1.png": "f276c0ffc4e5d61726daf2660d83efc7",
"assets/assets/images/t-shirt2.png": "92434173f6f1bb08e1da2da122ef79a4",
"assets/assets/images/t-shirt_ward.jpeg": "72ee301607bc0ba80edc3a87fe1db15f",
"assets/assets/images/t-shirt_ward1.jpeg": "e4b1e60ac690cafef3761d5fd0b6580b",
"assets/assets/images/t-shirt_ward2.jpeg": "62dc89e89549f86a128ec26a89fb677b",
"assets/assets/images/temp_image.jpg": "9784bbfb0f5113de7fa4e70c2739d490",
"assets/assets/images/temp_image1.jpg": "ea8e238579dafc62b597f3b80dc9c141",
"assets/assets/images/temp_image2.jpg": "9bd9a539d6c25c4dd8147e5135a74b7d",
"assets/assets/images/terms.png": "7d472c989a4ff36a87a942b4822f5f6e",
"assets/assets/images/traditional.jpeg": "edd914c3c892ce7a84dd79ad8a260f14",
"assets/assets/images/tv.jpeg": "ea0d58281b82032c7ddff810b0bad7cd",
"assets/assets/images/tv1.jpeg": "22894d19c3b33c963b3d44277dcdedfc",
"assets/assets/images/tv2.jpeg": "509e27fdcd3c6e6a53071e70bba6d168",
"assets/assets/images/tv3.jpeg": "f2e0f3ac9b31e42f9b357d07c4c98ba0",
"assets/assets/images/twitter.png": "aa23534c6ccddac18a74a6bd3197024b",
"assets/assets/images/Underwear_Loungewear_Accessories.png": "aec7a767afa9e5edee31aac2a6f13c83",
"assets/assets/images/visa_card.png": "547ed2d92ba479fe25d9f4c8681230de",
"assets/assets/images/watch.png": "035d07dc57482dd4faa1f916d0298f91",
"assets/assets/images/watchcat.jpeg": "18774ce0cadc712124471c38731c3dec",
"assets/assets/images/western.jpeg": "571da95a4a06b764c023f842136eb2d3",
"assets/assets/images/women.png": "508b55de67c801d2c697f68106a87484",
"assets/assets/images/youtube.png": "10f257e97ca5dfc79f7d035dc40c8c3d",
"assets/assets/ingrid/coin.png": "2948c935250cf832407c57f2e56af35b",
"assets/assets/ingrid/icons/activity.svg": "9035aa0f2da3ff36d80895b6e54e5b7d",
"assets/assets/ingrid/icons/arrow_down.svg": "0095473e7b71856fbbfbe8ee1445d20e",
"assets/assets/ingrid/icons/banking.svg": "4bbfde292c4bd84b59d1f9e60109f990",
"assets/assets/ingrid/icons/bitcoin.svg": "2561bb5a4e91215a66afca87a4def2c6",
"assets/assets/ingrid/icons/bold.svg": "8cd6ab54a7116369fc5f11fe844b2266",
"assets/assets/ingrid/icons/briefcase.svg": "1ad10e119873e83b69e774e27c0bfb89",
"assets/assets/ingrid/icons/calendar.svg": "e9eab3b40b5ba134f16bc5b4a03b8403",
"assets/assets/ingrid/icons/center-alignment.svg": "05ea4edd08d9894419c3bc912c75f736",
"assets/assets/ingrid/icons/chat.svg": "616eff371bb04e4d3809907237d5ce58",
"assets/assets/ingrid/icons/check.svg": "c0ea4d9b0f5add35f9c06d2391b0d7ee",
"assets/assets/ingrid/icons/close.svg": "5856e350898d3602bdaf48fc5a18ad5b",
"assets/assets/ingrid/icons/contact.svg": "3d0cfcea3d502c94a4c387863903699f",
"assets/assets/ingrid/icons/crypto.svg": "599dd560cea36717abbaebe08c44b0e0",
"assets/assets/ingrid/icons/dark-logo.svg": "510dcbe009736eec0a0c299ccc44fa17",
"assets/assets/ingrid/icons/dashboard.svg": "c275ee3d4b44dd15675f87c1d7cfe232",
"assets/assets/ingrid/icons/document.svg": "346efbdf06e42e74a5965e11a7e73be3",
"assets/assets/ingrid/icons/down-arrow.svg": "1434cffaafce10b9300f787406e508c7",
"assets/assets/ingrid/icons/draft.svg": "0222bf0b2ee205a999e501c90f9f3316",
"assets/assets/ingrid/icons/drive.svg": "9e145db571f6a405cf53c876739419c4",
"assets/assets/ingrid/icons/dropbox.svg": "55fffee6b32ce262b36053a798b6bfc7",
"assets/assets/ingrid/icons/email.svg": "5e9e39927b0a633ac37585f274efdc06",
"assets/assets/ingrid/icons/ethereum.svg": "88acd60cb62964e875f687f30c5d6868",
"assets/assets/ingrid/icons/favorite.svg": "32afc85fe451f699e51e3e37ad8fb116",
"assets/assets/ingrid/icons/file-manager.svg": "956ddb1982af693044e8abb5f0e7b869",
"assets/assets/ingrid/icons/folder_file.svg": "909bc4c631b44aa134b51cf29515d654",
"assets/assets/ingrid/icons/fullscreen.svg": "aee14158cfa8fc7087a50b757c3ff834",
"assets/assets/ingrid/icons/icloud.svg": "7bacf0ee15acc0d443be614765d02353",
"assets/assets/ingrid/icons/image.svg": "50443a561cd0e471acaa10a8381d4a81",
"assets/assets/ingrid/icons/important.svg": "38b7c2cc461c24d379fc07d97525a564",
"assets/assets/ingrid/icons/important_yellow.svg": "56eb026b1a14d4151dd17a0d937971f9",
"assets/assets/ingrid/icons/inbox.svg": "18efcca08443589d3a0b336e960657f6",
"assets/assets/ingrid/icons/invoice.svg": "91572dfd69bf1ec5b9b98f280dda6af7",
"assets/assets/ingrid/icons/italic.svg": "6b65d1b6f0d80f97175282ebb63eb0b3",
"assets/assets/ingrid/icons/justify.svg": "1bd0da71df28c0f4dfa0a95e88e5354e",
"assets/assets/ingrid/icons/kanban.svg": "301dda480a46035cdc270e697925609b",
"assets/assets/ingrid/icons/left-align.svg": "2f22cc7058fdf7d33de3ff487d4c8ba1",
"assets/assets/ingrid/icons/light-logo.svg": "aa425887f5a175a306ec778af0c46d6e",
"assets/assets/ingrid/icons/link.svg": "6a59003cbe91bdaf3f2163a965641e6d",
"assets/assets/ingrid/icons/litecoin.svg": "2899db4302379a8ec5af30a776cdd0b3",
"assets/assets/ingrid/icons/menu.svg": "ea77260074d3d32972bdc2706c86ac53",
"assets/assets/ingrid/icons/music.svg": "3f865d35404ff8e827eaa465bcfd8f5c",
"assets/assets/ingrid/icons/notification.svg": "87a31a3f4d77f2319a0621e56331e001",
"assets/assets/ingrid/icons/onedrive.svg": "739eb0f2a0f8bfbc3a1a1b457a71d0ca",
"assets/assets/ingrid/icons/phone.svg": "9c7888365bd6e448e2fe7329f3f2309a",
"assets/assets/ingrid/icons/plus.svg": "cce06c9ccd15190e3a41b63d049fdee1",
"assets/assets/ingrid/icons/printer.svg": "0423c5a4c4ffe8fa567b3d859c0b4998",
"assets/assets/ingrid/icons/read.svg": "e75c33b9adb74169cffe8b99deb8728a",
"assets/assets/ingrid/icons/right-alignment.svg": "c2bcae70650dc6851dd66f35385e5850",
"assets/assets/ingrid/icons/ripple.svg": "4819760349cbbfaadc685b594aaa35e9",
"assets/assets/ingrid/icons/search.svg": "07e91a01a3ed6fb0e20d8eccab83787a",
"assets/assets/ingrid/icons/send.svg": "be5761ea4c2e65179c053732e3d7df8a",
"assets/assets/ingrid/icons/step.svg": "de930389899109b7946af4608dbbaeec",
"assets/assets/ingrid/icons/todo.svg": "8b3c346da3ee675058b502f3ec676849",
"assets/assets/ingrid/icons/todo_menu.svg": "324e233bcc2dc0cf41b0171052ea21c4",
"assets/assets/ingrid/icons/trash.svg": "bbda29bce08cbadd3dbb02a81b8265ae",
"assets/assets/ingrid/icons/underline.svg": "15b3e468519b7a4c67413fe20524ed9e",
"assets/assets/ingrid/icons/up-arrow.svg": "fbe52ad283f3ba8b16a74b2027d1e0d4",
"assets/assets/ingrid/icons/user.svg": "1f631357771e3e22875fe97fdd495a90",
"assets/assets/ingrid/icons/video.svg": "732f203875aa9695392bd43131e049e6",
"assets/assets/ingrid/icons/video_call.svg": "e9cd27d4bc917f6c61857c6df4ff10f6",
"assets/assets/ingrid/icons/view.svg": "1f4a45b45133ae6fb1650c8877b36ace",
"assets/assets/ingrid/square.png": "cb4160a392a90287c87ab6ce0f5f7986",
"assets/assets/language/en.json": "dff0ff135fc3d1587c610b0272d255ce",
"assets/assets/language/es.json": "066f3ff0d32d5d8ab83fa68debe3a3f9",
"assets/assets/language/hi.json": "686292ee4897345cbd4afd826fbd86da",
"assets/assets/real_estate/castleCombe.jpeg": "d54e9009e1b6a339da9d24b2c7f8fa7f",
"assets/assets/real_estate/earthenDomeHouse.jpeg": "d81907f9afd405c794f2e588b8c65c36",
"assets/assets/real_estate/emeraldLake.jpeg": "bec2eed5ec54e3814d76af62ca9c919e",
"assets/assets/real_estate/historicFarmhouse.jpg": "57ae1ace121b4380142d821b2f4f9fa3",
"assets/assets/real_estate/house-409451_1920.jpg": "ea9554ddff8ec729344e4a5bec834bca",
"assets/assets/real_estate/industrialChic.png": "cd71a7bb244fb89909d87235cc4bb357",
"assets/assets/real_estate/luxuriousBeachHouse.jpg": "4219db87bbc1ea60506144d383d29ea8",
"assets/assets/real_estate/mediterraneanVillainGreece.jpeg": "b2f76ee7b95345a868df33e808d6cf6d",
"assets/assets/real_estate/modernCityApartments.jpeg": "ef2653d45f0ab29521a0108f12bc5f94",
"assets/assets/real_estate/modernFarmhouse.jpeg": "575986fb62abea89cc9520fd5a0417ad",
"assets/assets/real_estate/poolOverwaterVilla.jpeg": "84a847a7574a11609227d27c851f4b3c",
"assets/assets/real_estate/property_details.jpg": "96688560309b73c005b69f949f6f7a70",
"assets/assets/real_estate/property_rent.svg": "c309a1dcc7bae553e078db94dae34b3e",
"assets/assets/real_estate/property_sale.svg": "7f45312aa7727d404418d06d68344958",
"assets/assets/real_estate/redwoodsTreehouse.webp": "7f03387e23b4599fdc2c074422fbe629",
"assets/assets/real_estate/tinyHouse.jpeg": "924283fe4b6ad2b48c65524bd0602a0e",
"assets/assets/real_estate/totel_listing.svg": "52198ee3dc2d1e05a0098be5832f497d",
"assets/assets/rocket.gif": "6cac02da641301ffa494cf6e266ae557",
"assets/assets/university/icons/attendance.svg": "54d2dd88283d4c4bc27f88e07bd46f59",
"assets/assets/university/icons/contact.svg": "fedc77bbf27df01ee2cf2e88c22263a9",
"assets/assets/university/icons/dashboard.svg": "7477ee1dc65ec6488a85d37adb9b3092",
"assets/assets/university/icons/department.svg": "29a5242cbdaddecc07152c47205268bd",
"assets/assets/university/icons/fees.svg": "dfcdbeac4a5f2af1ada96a00202924cf",
"assets/assets/university/icons/file_manager.svg": "968ff5ca3a359e0ecd93ca34b06fda11",
"assets/assets/university/icons/hostel.svg": "2d47657ea34c01c45d9e3c10feca74da",
"assets/assets/university/icons/leave.svg": "409c711c9d4a4963ee32ff26e28a63d0",
"assets/assets/university/icons/library.svg": "3e59604f53c9fb806ad4d87f3b3c09ca",
"assets/assets/university/icons/noticeboard.svg": "64b6f1dc7b5338e190bb48ac4f7315ea",
"assets/assets/university/icons/person_check.svg": "a7dca0f8bf089737b0aef19ed2e3186e",
"assets/assets/university/icons/person_uncheck.svg": "ddaba35994b7a12ee3e8c1c642d58662",
"assets/assets/university/icons/professor.svg": "b9d4814a349548d3ac189f99082a0f23",
"assets/assets/university/icons/setting.svg": "87878c4a03c84e822ef1f0d3358c62ba",
"assets/assets/university/icons/staff.svg": "140b70abfd0217f41559a01bd1cdd993",
"assets/assets/university/icons/students.svg": "5a7a54ef9922b01fa8b35caf8dd671ff",
"assets/assets/university/icons/taskboard.svg": "0de60627c070280227f9fbf0f1f3cd5e",
"assets/assets/university/icons/transport.svg": "77bd60d4cf50ae9d7ada8f38eeb189f8",
"assets/assets/university/icons/university.svg": "16eb00bfde3bd4e646db18d59645dd72",
"assets/assets/university/png/1.jpeg": "c694469b3fdda5274b3e5d66791f5f8f",
"assets/assets/university/png/2.jpeg": "666e809de3c55a4007e884a4c59d7c85",
"assets/assets/university/png/3.jpeg": "dd87ac38c228d1e393837b5566d35a6e",
"assets/assets/university/png/4.jpeg": "31d2b512031ae68450a2418ae328a802",
"assets/assets/university/png/5.jpeg": "d9a1a5e998b1ebc4c666f39bc84e7d8b",
"assets/assets/university/png/6.jpeg": "83f946cad311aea927ba728401c477aa",
"assets/assets/university/png/filter_sort.png": "7a7e0270fa6a205a4ef935c66433030f",
"assets/FontManifest.json": "9a4d1bd9c59fd351fe182e2425ea7fd7",
"assets/fonts/MaterialIcons-Regular.otf": "1a2962d2ca04cf6a1eb7ff16a821fb1e",
"assets/NOTICES": "6e4268c903b69df047b1604c365f396a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "143273e45d531fc6e77100697fbb2def",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d3d692d0260bc4d0d3e907cf265622fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e1e9f00dfe8b9a2da33c744a214a893c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ecf446fb3d2f2058207a6c8bfedc740b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ddff2df1164121c542a9ab1f6cac28e",
"/": "0ddff2df1164121c542a9ab1f6cac28e",
"main.dart.js": "ed2c0fb13e5a83b6883da22c3b9117dd",
"manifest.json": "f9697d0008d4ebd0e7e933c75ce49f13",
"version.json": "b14e4b3c9cc61637edcc230d6b47c6a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
