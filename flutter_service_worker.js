'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "89f0be5f214746f9c03cff1ea4e60eb1",
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
"assets/assets/hospital/bntUpdate.svg": "079d13979f58cda6be76878d3928bc3a",
"assets/assets/hospital/btnEdit.png": "31da3dbb1482587439e4a4374149310e",
"assets/assets/hospital/btnRecovered.png": "bb239eb81703b39e17c8de46d7635916",
"assets/assets/hospital/chats.svg": "033cb61cdffd54bffa45b3553ed9fed6",
"assets/assets/hospital/check-circle.svg": "ab3637ec036628e0c4558f6258822438",
"assets/assets/hospital/crm_logo.png": "1271bb06552ada6e29340f307c8889e6",
"assets/assets/hospital/dashboard.svg": "11db1fca545ed2f714a543602f5aaad4",
"assets/assets/hospital/doctor.svg": "d8f737a4b4e5573c66e3cef44114cf25",
"assets/assets/hospital/edit.svg": "d55c49bf06132b172fde7a0e958f8421",
"assets/assets/hospital/email.svg": "a20839b83a909393e0d4ab61ec90628e",
"assets/assets/hospital/facebook.svg": "d610cd49c57b418673c1acf26cba1787",
"assets/assets/hospital/graph_left.svg": "7120427ee163d6d55b32f2e6d8b148fa",
"assets/assets/hospital/graph_right.svg": "c1e11d51b581124a327f9291fc9a244c",
"assets/assets/hospital/heart_rate.svg": "6b2b62623d373b8ff1fe38b09ecc0715",
"assets/assets/hospital/hospital_icon.png": "24ae687824d9e2826408ea59a01eab81",
"assets/assets/hospital/ic_back_page.svg": "0005460b46993c76e0011c24b49146fb",
"assets/assets/hospital/ic_calendar.svg": "67b1853f1803de57d5c6eeb426ba6d2a",
"assets/assets/hospital/ic_calendar_white.svg": "348c9889939e3d782e19cff8a05506e3",
"assets/assets/hospital/ic_chevron_left.svg": "2b6323cfd0cfa1d960c5d2a62c4ae7e9",
"assets/assets/hospital/ic_chevron_right.svg": "6dc5d2e880559532d3fdb27f979fa784",
"assets/assets/hospital/ic_dashboard.svg": "931aeca0aa5b1b487ba8b95e6283eae4",
"assets/assets/hospital/ic_delete.svg": "f4f95d3fe5830d4e30e05f6dd6d5b70d",
"assets/assets/hospital/ic_department.svg": "3631fdfd53f67846521dc61bc4337939",
"assets/assets/hospital/ic_dollar.svg": "b1a4003b78aa8317002751d1c7f88386",
"assets/assets/hospital/ic_down_arrow.svg": "25d56c8a99a3c3b40487bfb0cbaad29b",
"assets/assets/hospital/ic_heart.svg": "49f9ec264c7540ddabca642105950c17",
"assets/assets/hospital/ic_menu.svg": "523cb5bab6963d3be621e4a0e0091845",
"assets/assets/hospital/ic_next_page.svg": "e99155b39bc6786b36c11a933bf2ac78",
"assets/assets/hospital/ic_setting.svg": "5cc45a707d807996b9937442fe220d5c",
"assets/assets/hospital/ic_setting_white.svg": "a482bf90780378f0ce8a4fef02af83d4",
"assets/assets/hospital/ic_sort.svg": "704f034c56697b359f9dbaea98fc652d",
"assets/assets/hospital/ic_stepper.png": "dd977a7e60e70697abdca3eaac78e46b",
"assets/assets/hospital/ic_user.svg": "c3dc6084ea39dae00e6a8ef0d56d13d2",
"assets/assets/hospital/instagram.svg": "b442e25bbaae5728daea812521551f1a",
"assets/assets/hospital/mail.svg": "4a1c817af451ff9f28de056aa778817c",
"assets/assets/hospital/male.svg": "141135275fa1315dbfe8becd8b35512e",
"assets/assets/hospital/map-pin.svg": "399b89cc5af90e92567125db12db534d",
"assets/assets/hospital/map.svg": "0bd998914db167075ab30cc5bfdd43fa",
"assets/assets/hospital/mapThumb.png": "2fc7ddd0679b1d59727a5e3c573e9303",
"assets/assets/hospital/next.svg": "63cfa64c3cb29c6816c02a44d916ae76",
"assets/assets/hospital/notifications.svg": "cfc8a8bff7cbc76fbbebbd7928eee915",
"assets/assets/hospital/patient.svg": "84b960e28d76abf447751b1073c067ba",
"assets/assets/hospital/patient_care.svg": "ed2b29e3cedea754e7f662d0f217fd50",
"assets/assets/hospital/phone.svg": "30af3d402494c53a9b24bad03e17093a",
"assets/assets/hospital/previous.svg": "53d88d24cdd7180e7108a40c7c998a03",
"assets/assets/hospital/promos.svg": "d58425f367dd99a4a5e5e8c66cc07d32",
"assets/assets/hospital/review.svg": "7a1ced54d1e385141c62d874c2a24074",
"assets/assets/hospital/review1.svg": "5d730d118dca38d0e74c7b95d6dfe60d",
"assets/assets/hospital/search.svg": "a87431d6693aebc686e5f0372b1c1598",
"assets/assets/hospital/star.svg": "59b58fa1d4463d154caa521d57fb68c9",
"assets/assets/hospital/stethoscope.svg": "224d3025ffcd87041414218cd734d872",
"assets/assets/hospital/twitter.svg": "2d3eb0dff34ca8f4b7107caadddbbf24",
"assets/assets/hotel/bed.svg": "94bc40ddd2cf7b39265e7f5a97b1375c",
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
"assets/assets/hotel/reservations.svg": "fad69e3dc07ac5fb9676391d47e156a2",
"assets/assets/hotel/room_reservation.svg": "ecb010eca586f226bacc3e62c5da185e",
"assets/assets/hotel/standard_room.jpeg": "4f862379c96f916aaa1c5af46c46753e",
"assets/assets/hotel/trash.svg": "e8a791a7077054ee4ccbc70012b50dde",
"assets/assets/icons/add-square.svg": "3ca368540d130c3c807013281d82a285",
"assets/assets/icons/Admin_Kit.svg": "b454cd3f9db4e5aa74b601eba29c63d2",
"assets/assets/icons/Admin_Kit_Text.svg": "4536dca87a4294b8db9661212724cdd6",
"assets/assets/icons/archive-2.svg": "bcac69e6304142809c5f6a382a31cd82",
"assets/assets/icons/arrow-down-2.svg": "7f74e39e4d3d0f36b81dfb66b341103b",
"assets/assets/icons/arrow-left.svg": "15cde702903952f1b4ded7ada8023c40",
"assets/assets/icons/arrow-right-2.svg": "e89449247c4aa98318b71b3ae394032b",
"assets/assets/icons/arrow-right-3.svg": "f689ba3a1c09ddf7a514a8b50e3f27c1",
"assets/assets/icons/Auth_BG.svg": "1de034439f41adb0b0bec3c105837e8a",
"assets/assets/icons/box-1.svg": "d22b7147dedb2beeb1b054f407eba3ae",
"assets/assets/icons/buildings.svg": "a534b5ea1742addd30aab894237e0280",
"assets/assets/icons/calendar-2.svg": "a4911892644a08f75a9113391844d9a9",
"assets/assets/icons/camera.svg": "d4f524ee0b11a17dad1faa8a53531439",
"assets/assets/icons/category.svg": "f62d3eb5ff6cdc3731e25c00b6477436",
"assets/assets/icons/chart-pie.svg": "4aa0478dca9f5275fa0d852baef4d9dc",
"assets/assets/icons/checkbox-circle.svg": "c9e57dc01a6fedc64718d5c42650c8ef",
"assets/assets/icons/close-square.svg": "9a79e8ce8aa50dfbfa7ef3790f2b07d6",
"assets/assets/icons/cloudcomputing.svg": "c3719a84fb38d0312e7540fa8ed958ec",
"assets/assets/icons/crm.svg": "04b92f1f115d9238c9e3ccba282abb69",
"assets/assets/icons/facebook.svg": "35b49d77b2359b18e4284ad132dda413",
"assets/assets/icons/grid-2.svg": "2cf19a1e1dedcbc070aa5813efa5b955",
"assets/assets/icons/home-2.svg": "9be3c87cf1daa465befda6239a59c915",
"assets/assets/icons/hrm.svg": "ffb693d048e66ad0e04838527c68f22d",
"assets/assets/icons/maintenance.svg": "c1128a717dc4dfce45fb76a2d6f9fc55",
"assets/assets/icons/map.svg": "e7bdf89d64cc9c21594149f955810db4",
"assets/assets/icons/notification-1.svg": "def464219fe311fc457af1169862b194",
"assets/assets/icons/pin.svg": "6ca7416f556c9174dab111cec6821a15",
"assets/assets/icons/receipt-2-1.svg": "90bbb90f89b1bd81dc84bf2ebdc49bf9",
"assets/assets/icons/search-normal-1.svg": "8f39818d05e1775ba1040de0d079152d",
"assets/assets/icons/setting-2.svg": "f5eb6aef16fea6a48b49fce98c62dd50",
"assets/assets/icons/shop.svg": "ed8cc22c0da82997c0d88e20795736b8",
"assets/assets/icons/sms.svg": "32c7859a8575a4528022e75f3441148f",
"assets/assets/icons/trash.svg": "0b5e1165ca5b2acd0d945601cf717402",
"assets/assets/icons/twitter.svg": "1d1bf5b7f02c61afe47a503bbf858e0e",
"assets/assets/icons/verify.svg": "f6657b7e307f0cc07a743169eddf9872",
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
"assets/assets/images/ecommerce.svg": "6b47791535b525bdafafcc6e884df2e3",
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
"assets/assets/ingrid/icons/activity.svg": "4edf88875cbadb2137a0d309f06f70b3",
"assets/assets/ingrid/icons/arrow_down.svg": "7c0e70592b63a0059f049195ae9d528c",
"assets/assets/ingrid/icons/banking.svg": "4ff7f90ca942456498848c997c52cd5e",
"assets/assets/ingrid/icons/bitcoin.svg": "b010c891bd1b0edf558e4105c9c1e5b4",
"assets/assets/ingrid/icons/bold.svg": "c7c6b74c4f85bf87d1b3f17821b5e612",
"assets/assets/ingrid/icons/briefcase.svg": "b603ed4b856ae215e4b511dddb80dee0",
"assets/assets/ingrid/icons/calendar.svg": "ce9b55de0f5a29f032c5e1a7bc1345c0",
"assets/assets/ingrid/icons/center-alignment.svg": "7e4135434676992e59bc4d923f20a4df",
"assets/assets/ingrid/icons/chat.svg": "7b3ed09e2cfbfb48b7e73ce72a327619",
"assets/assets/ingrid/icons/check.svg": "b514699cebb0424386b30e90d602e4d3",
"assets/assets/ingrid/icons/close.svg": "ec9776850efe3ca1cd7cce2222f35b11",
"assets/assets/ingrid/icons/contact.svg": "f52c9938fd02872da4fcbc076d073d00",
"assets/assets/ingrid/icons/crypto.svg": "c1bc149bba3554cb8d9ee0111347e59e",
"assets/assets/ingrid/icons/dark-logo.svg": "24dd631046cddbc748511ee022bda5bf",
"assets/assets/ingrid/icons/dashboard.svg": "62ed47130abdd929581c1e32b310aa08",
"assets/assets/ingrid/icons/document.svg": "5d57a5b49eadd8a1650cf704b971b0e6",
"assets/assets/ingrid/icons/down-arrow.svg": "659c1a4ced6175c0621147e526fb016e",
"assets/assets/ingrid/icons/draft.svg": "4c7d3915dce1d3509825c85aee878097",
"assets/assets/ingrid/icons/drive.svg": "59da13158f25cf3e2a587c36794165ca",
"assets/assets/ingrid/icons/dropbox.svg": "6504ef85ff884e87e3be0a0e7270371b",
"assets/assets/ingrid/icons/email.svg": "2edbe1a11e401742c913d1d2e6586921",
"assets/assets/ingrid/icons/ethereum.svg": "2170e5dd17cdd209b3fbc32fe4ba3693",
"assets/assets/ingrid/icons/favorite.svg": "ea815cb03c6dddf432d1511362813456",
"assets/assets/ingrid/icons/file-manager.svg": "b09ae355f78e5d82e3f2fed6c81d39f3",
"assets/assets/ingrid/icons/folder_file.svg": "4f9e0c40cccfa2b918a6303b38db5aad",
"assets/assets/ingrid/icons/fullscreen.svg": "fd9e6458c97834196df6cee93d50b4bf",
"assets/assets/ingrid/icons/icloud.svg": "459069c98f47ba4e31d1674b1b1c95c7",
"assets/assets/ingrid/icons/image.svg": "862a1501d13a4ebb0ca50d9989f9d7a7",
"assets/assets/ingrid/icons/important.svg": "18230d5d5844c836ff7cf1e0044ce489",
"assets/assets/ingrid/icons/important_yellow.svg": "279c1af0311259997725963fb0af5558",
"assets/assets/ingrid/icons/inbox.svg": "e5a25e914238200313e5ca3b828ff99c",
"assets/assets/ingrid/icons/invoice.svg": "c2adc7bcaac641e60acbb05751711cde",
"assets/assets/ingrid/icons/italic.svg": "71aec1c13cd2a0a2720d2582b79cacf7",
"assets/assets/ingrid/icons/justify.svg": "4f9c951b196b72fa7d30be475187b20c",
"assets/assets/ingrid/icons/kanban.svg": "9d8790f1ae0529c4c80a4f9386f3f710",
"assets/assets/ingrid/icons/left-align.svg": "caa9e91cb363cf78b58cfda4a2698891",
"assets/assets/ingrid/icons/light-logo.svg": "0e3d0e7b1452b176524e2ecb5b3cafc5",
"assets/assets/ingrid/icons/link.svg": "063374446569ee6224c1d77d8583d70f",
"assets/assets/ingrid/icons/litecoin.svg": "f2236ee003b9576bc539f3d078fcbf87",
"assets/assets/ingrid/icons/menu.svg": "1bfd97b359da50cdf9fca450d2b39287",
"assets/assets/ingrid/icons/music.svg": "e3a204e6316df098a24984c15d41ed51",
"assets/assets/ingrid/icons/notification.svg": "140c6ed9e8149a653c55592aa12b2c7f",
"assets/assets/ingrid/icons/onedrive.svg": "efbcd3b8591afe860b3a755f9846c1d4",
"assets/assets/ingrid/icons/phone.svg": "6216e9048039f82791d587690e803a62",
"assets/assets/ingrid/icons/plus.svg": "55db6366d0cf0ddf5292cc36c63ac4e1",
"assets/assets/ingrid/icons/printer.svg": "b0e7a3094e83613f6b61840603600331",
"assets/assets/ingrid/icons/read.svg": "213aaf81361ef1db17ed7e2085ad6f18",
"assets/assets/ingrid/icons/right-alignment.svg": "9e7424cdae26401a0968f7ede99e2254",
"assets/assets/ingrid/icons/ripple.svg": "100901883268fc1986c1b38d160cbfba",
"assets/assets/ingrid/icons/search.svg": "33710415e2f8f2872cfc2fb532901826",
"assets/assets/ingrid/icons/send.svg": "3e6f4fc1f6a3cc0c67b23e6d64abb7ed",
"assets/assets/ingrid/icons/step.svg": "9eb03355b32870611afce0d98e938c7e",
"assets/assets/ingrid/icons/todo.svg": "956f9f0a09404a83f6552a4b41243ecf",
"assets/assets/ingrid/icons/todo_menu.svg": "6d7a472d062182522c86cbb50ce61e7c",
"assets/assets/ingrid/icons/trash.svg": "ff8a09819254e0a3a99c8c0682474668",
"assets/assets/ingrid/icons/underline.svg": "d2c001e25cee002aee07f96db694e5bc",
"assets/assets/ingrid/icons/up-arrow.svg": "ae47b2e45d9d21c84d6c2f0c880b584c",
"assets/assets/ingrid/icons/user.svg": "f30e39f5bfe770c281a40b6196f6689e",
"assets/assets/ingrid/icons/video.svg": "891c26f87de600c4568e5368ebaa7965",
"assets/assets/ingrid/icons/video_call.svg": "824b589fef1bb7f42f0b4cb8cc90fb48",
"assets/assets/ingrid/icons/view.svg": "686a2bf704598bfbdc549648bcadc9b4",
"assets/assets/ingrid/square.png": "cb4160a392a90287c87ab6ce0f5f7986",
"assets/assets/language/en.json": "5f7ae53d5fb876eedaa97e9163d25029",
"assets/assets/language/es.json": "2ad9ecb9a1bc990c65a8049d557f182c",
"assets/assets/language/hi.json": "cb194f85b342ee48e27625fcfe9a06f6",
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
"assets/assets/real_estate/totel_listing.svg": "3988d137c6114e52554343ec400ad79e",
"assets/assets/rocket.gif": "6cac02da641301ffa494cf6e266ae557",
"assets/assets/university/icons/attendance.svg": "b440ce388780a65d9d7ac3a43d87776b",
"assets/assets/university/icons/contact.svg": "fedc77bbf27df01ee2cf2e88c22263a9",
"assets/assets/university/icons/dashboard.svg": "798efb1869d7e50bd8e49e25eafcd695",
"assets/assets/university/icons/department.svg": "ea8faea66ccdfea392653a77b700c4b5",
"assets/assets/university/icons/fees.svg": "d810e26a3d154649959efd99d547f8a1",
"assets/assets/university/icons/file_manager.svg": "b6820b0ca66b3ec1b043a3b5fb79afb1",
"assets/assets/university/icons/hostel.svg": "2d47657ea34c01c45d9e3c10feca74da",
"assets/assets/university/icons/leave.svg": "e1dc7a509b8fabf606ee1b3ce76af98a",
"assets/assets/university/icons/library.svg": "61e96fe086af8353df63d989b0ef2ed1",
"assets/assets/university/icons/noticeboard.svg": "3b1742c8b54805fd3a28d6d475dcac3b",
"assets/assets/university/icons/person_check.svg": "a7dca0f8bf089737b0aef19ed2e3186e",
"assets/assets/university/icons/person_uncheck.svg": "ddaba35994b7a12ee3e8c1c642d58662",
"assets/assets/university/icons/professor.svg": "b9d4814a349548d3ac189f99082a0f23",
"assets/assets/university/icons/setting.svg": "f5eb6aef16fea6a48b49fce98c62dd50",
"assets/assets/university/icons/staff.svg": "78d4ab81c4995e33ff757b9b228b30ee",
"assets/assets/university/icons/students.svg": "bc13c1f45c68ca8000b6a2d96ec1f7c8",
"assets/assets/university/icons/taskboard.svg": "e1b299f34fb03d56b3a6e9d7253f09bb",
"assets/assets/university/icons/transport.svg": "09dcbdbe04b842944e927601ce80a2da",
"assets/assets/university/icons/university.svg": "648c5c7e4f8691b5a5c680d8a1f31ddf",
"assets/assets/university/png/1.jpeg": "c694469b3fdda5274b3e5d66791f5f8f",
"assets/assets/university/png/2.jpeg": "666e809de3c55a4007e884a4c59d7c85",
"assets/assets/university/png/3.jpeg": "dd87ac38c228d1e393837b5566d35a6e",
"assets/assets/university/png/4.jpeg": "31d2b512031ae68450a2418ae328a802",
"assets/assets/university/png/5.jpeg": "d9a1a5e998b1ebc4c666f39bc84e7d8b",
"assets/assets/university/png/6.jpeg": "83f946cad311aea927ba728401c477aa",
"assets/assets/university/png/filter_sort.png": "7a7e0270fa6a205a4ef935c66433030f",
"assets/FontManifest.json": "9a4d1bd9c59fd351fe182e2425ea7fd7",
"assets/fonts/MaterialIcons-Regular.otf": "ebcee913b8de6f98831cbcca5ae70a2e",
"assets/NOTICES": "13af16968ab4d5e9a643847e23844296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "143273e45d531fc6e77100697fbb2def",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a76b6cfebb3c121467674040ee7e7275",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "35744e3f91eec41e5299c82068662fe7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c515ce2d37963104ae30ae3bddb42f1f",
"/": "c515ce2d37963104ae30ae3bddb42f1f",
"main.dart.js": "e27228e3287746bfc157663e765214ec",
"manifest.json": "d3c3dace25b2be3e2483092b6242aba5",
"version.json": "b14e4b3c9cc61637edcc230d6b47c6a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
