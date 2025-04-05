1.1 Modul — Nest.js ilovasining muayyan funksional qismini tashkil etuvchi blok bo‘lib, komponentlarni (service, controller, provider) guruhlaydi.

1.2 Module ichida imports, exports, providers, controllers vazifasi:

imports: Boshqa modullarni kiritish.

exports: Tashqariga ulashiladigan komponentlar.

providers: Xizmatlar (service) va logikalarni ro‘yxatga olish.

controllers: HTTP so‘rovlarini qabul qiluvchi sinflar.

1.3 Katta loyihalarni strukturali, modulga bo‘lingan va boshqarilishi oson holatda yaratish uchun.

1.4 Kodni toza, o‘qilishi oson va qayta ishlatish mumkin bo‘lgan holatda saqlash uchun.

@Injectable() decorator nima vazifani bajaradi?
Bu dekorator klassni DI (Dependency Injection) tizimida ro‘yxatdan o‘tkazadi, ya'ni u inject qilinadigan service bo‘lishi mumkinligini bildiradi.

Nest.js'da Dependency Injection qanday ishlaydi?
Nest.js @Injectable() bilan belgilangan klasslarni IoC container orqali avtomatik yaratadi va kerakli joyga inject qiladi.

IoC (Inversion of Control) Container nima va u qanday ishlaydi?
Bu container obyektlar yaratish va ularga bog‘liqliklarni boshqarish ishlarini bajaradi. Dasturchi o‘rniga, Nest.js bu ishni o‘z zimmasiga oladi.

Nest DI Container service'larni qayerda va qanday saqlaydi?
DI container modul ichida ro‘yxatdan o‘tgan provider’larni saqlaydi va kerak bo‘lsa, ularni singleton sifatida yaratib, qayta ishlatadi.

Nega service’ni new CatsService() bilan emas, inject qilish afzal?

Qo‘lda boshqaruvdan qutulasiz

Bog‘liqliklar avtomatik hal etiladi

Testlash osonlashadi

Kod modulli va kengaytiriladigan bo‘ladi

Provider nima va u nima uchun kerak?
Provider — bu Nest.js konteyneriga ro‘yxatdan olingan obyekt (odatda service) bo‘lib, uni boshqa joylarda inject qilish uchun ishlatiladi. U biznes logika yoki ma’lumotlarga ishlov berish kabi funksiyalarni bajaradi.

Qanday qilib custom provider yaratish mumkin?

Yoki useValue, useFactory yordamida ham yaratish mumkin (quyida tushuntirilgan).

useClass, useValue, useFactory farqlari:

useClass: Belgilangan klass asosida obyekt yaratadi.

{ provide: MyInterface, useClass: MyService }
useValue: Tayyor obyekt yoki qiymatni beradi.


{ provide: 'CONFIG', useValue: { port: 3000 } }
useFactory: Funksiya orqali qiymatni dinamik yaratadi.

Token-based injection nima va qachon ishlatiladi?
Bu — provider’ni nom (token) orqali inject qilish usuli. Odatda interfeyslar, constant’lar yoki useValue/useFactory bilan ishlaganda kerak bo‘ladi.

Provider scope turlari va farqlari:

DEFAULT: Singleton — bir marta yaratiladi, hammaga bitta nusxa.

REQUEST: Har bir HTTP so‘rov uchun yangi nusxa.

TRANSIENT: Har bir inject bo‘lishda yangi nusxa.

Nest.js'da decorator'lar qanday vazifani bajaradi?
Nest.js’da decorator’lar — klass, metod, parametr yoki property ustida ishlaydigan metadata beruvchi funksiyalar. Ular orqali Nest.js ichki tizimga kerakli ma'lumotni beradi (masalan, bu klass service yoki controller ekanligini bildiradi).

TypeScript'da decorator'lar nima?
TypeScript'da decorator — bu funksiya bo‘lib, u klass, metod, parametr yoki property ga qo‘llanadi va unga qo‘shimcha xatti-harakatlar yoki metadata qo‘shadi.

@Param(), @Body(), @Query() kabi decorator’lar Nest.js’ga HTTP so‘rovdan ma'lumotni qayerdan olishni ko‘rsatadi.

@Injectable(), @Controller(), @Get() kabi decorator’lar qanday ishlaydi?

@Injectable() — klassni provider sifatida belgilaydi.

@Controller() — klassni controller deb belgilaydi.

@Get() — metodni HTTP GET endpoint sifatida belgilaydi.

Ularning barchasi metadata qo‘shadi, Nest.js esa bu metadatani o‘qib, kerakli natijani hosil qiladi.

Custom decorator’lar nima uchun foydali?

Kod takrorlanishini kamaytiradi

Qo‘shimcha metadata yoki xatti-harakatlar qo‘shish imkonini beradi

Reusable logic yaratadi (masalan: @Roles('admin'), @Public() kabi)

Modullar orasida service'larni qanday ulashish mumkin?
Bitta modulda providersga qo‘shilgan service’ni boshqa modulda ishlatish uchun:

Uni exports ga qo‘shasiz.

Keyingi modulda imports orqali o‘sha modulni chaqirasiz.

exports array’i nima vazifani bajaradi?
Moduldagi provider yoki component’ni tashqi modullarga ochish (ulashish) uchun ishlatiladi.

Global module nima va u qachon ishlatiladi?
Global modul — barcha modullarda avtomatik mavjud bo‘ladigan modul.
Dynamic modullar nima va ular qachon ishlatiladi?
Dynamic modul — register() yoki forRoot() kabi metodlar orqali dastur ishlash vaqtida sozlanadigan modul.

Circular dependency muammosi nima va uni qanday hal qilish mumkin?
Muammo: Ikkita modul/service bir-biriga bog‘liq bo‘lsa, Nest.js ularni yarata olmaydi (A → B va B → A).
Yechimlar:

forwardRef(() => BModule) ishlatish

Arxitektura qayta ko‘rib chiqilishi

Interface orqali bog‘lanish

Mediator pattern yoki event-based yondashuv