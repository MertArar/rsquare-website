import Link from "next/link";

type PrivacySection = {
  title: string;
  content?: string[];
  list?: string[];
};

const sections: PrivacySection[] = [
  {
    title: "Giriş",
    content: [
      `Özel hayatın gizliliği başta olmak üzere temel hak ve özgürlüklerin korunması amacıyla kişisel verilerle ilgili düzenlenen 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuat uyarınca bu Aydınlatma Metni hazırlanmıştır.`,
      `RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından kişisel verilerin güvenliğine azami hassasiyet gösterilmektedir. Kişisel veriler, bu metinde belirtilen amaçlar dışında kullanılmamakta, açık rıza veya mevzuatta öngörülen sebepler dışında üçüncü kişilerle paylaşılmamaktadır.`,
    ],
  },
  {
    title: "1. Kişisel Verilerin Toplanması, Çerezler ve Veri Toplanmasının Amacı",
    content: [
      `Kişisel veriler; internet sitesi, mobil uygulamalar, iletişim formları, e-posta hesapları, sözleşmeler, bilgilendirme formları ve benzeri kanallar aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanabilir.`,
      `Kişisel verilerin toplanmasındaki amaç; bilgi güvenliği süreçlerinin yürütülmesi, erişim yetkilerinin sağlanması, internet sitesi kullanım analizlerinin yapılması, kullanıcı deneyiminin iyileştirilmesi, ziyaretçi kayıtlarının oluşturulması, taleplerin takibi ve kanuni yükümlülüklerin yerine getirilmesidir.`,
      `Çerezler; sitenin temel fonksiyonlarını gerçekleştirmek, sistemi analiz etmek, performansı artırmak, kişiselleştirme sağlamak ve kullanım kolaylığı sunmak amacıyla kullanılabilir.`,
    ],
  },
  {
    title: "2. Kişisel Veri İşleme İlkeleri",
    list: [
      "Hukuka ve dürüstlük kurallarına uygun olma.",
      "Doğru ve gerektiğinde güncel olma.",
      "Belirli, açık ve meşru amaçlar için işlenme.",
      "İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma.",
      "İlgili mevzuatta öngörülen veya işlendikleri amaç için gerekli süre kadar muhafaza edilme.",
    ],
  },
  {
    title: "3. Kişisel Verilerin İşlenmesi",
    content: [
      `Kişisel veriler; her türlü sözlü, yazılı veya elektronik ortamda, hizmetlerin sunulabilmesi ve yasal yükümlülüklerin yerine getirilebilmesi amacıyla işlenebilir.`,
      `İşlenmesini gerektiren sürelerin sona ermesi halinde kişisel veriler silinir, yok edilir veya anonim hale getirilir.`,
    ],
  },
  {
    title: "4. İşlenecek Kişisel Veriler",
    list: [
      "Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası, doğum yeri ve tarihi gibi veriler.",
      "İletişim Bilgileri: Adres, telefon numarası, e-posta adresi ve diğer iletişim verileri.",
      "Hukuki İşlem Bilgileri: Resmî makamlarla yapılan yazışmalar ve hukuki süreçlere ilişkin veriler.",
      "İşlem Güvenliği Bilgileri: IP adresi, giriş-çıkış bilgileri, sistem kullanım kayıtları.",
      "Kullanıcı Alışkanlıkları: Site ve sistem kullanımına ilişkin analiz verileri.",
    ],
  },
  {
    title: "5. Kişisel Verilerin Aktarılması",
    content: [
      `Toplanan kişisel veriler, 6698 sayılı KVK Kanunu’nun 8. ve 9. maddelerine uygun olarak, belirtilen amaçlarla sınırlı olmak üzere yetkili kişi, kurum ve kuruluşlarla paylaşılabilir.`,
      `Kişisel verilerin üçüncü kişilerle paylaşılması gereken durumlarda aktarılan bilgiler yalnızca gerekli olduğu ölçüde paylaşılır.`,
    ],
  },
  {
    title: "6. Kişisel Verilerin İşlenme Şartları",
    list: [
      "İlgili kişinin açık rızasının bulunması.",
      "Kanunlarda açıkça öngörülmesi.",
      "Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması.",
      "Veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi için zorunlu olması.",
      "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması.",
      "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaatler için zorunlu olması.",
    ],
  },
  {
    title: "7. Kişisel Verilerin Silinmesi, Yok Edilmesi ve Anonim Hale Getirilmesi",
    content: [
      `İlgili mevzuata uygun şekilde işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel veriler resen veya ilgili kişinin talebi üzerine silinir, yok edilir veya anonim hale getirilir.`,
    ],
  },
  {
    title: "8. Veri Sahibinin Hakları",
    list: [
      "Kişisel veri işlenip işlenmediğini öğrenme.",
      "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme.",
      "Kişisel verilerin işlenme amacını öğrenme.",
      "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme.",
      "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme.",
      "Kişisel verilerin silinmesini veya yok edilmesini isteme.",
      "Otomatik sistemler sonucunda aleyhe çıkan sonuçlara itiraz etme.",
      "Kanuna aykırı işleme sebebiyle zarara uğranması halinde zararın giderilmesini talep etme.",
    ],
  },
  {
    title: "9. Veri Sahibinin Başvuru Şekli",
    content: [
      `KVK Kanunu’nun 11. maddesi kapsamındaki haklara ilişkin başvurular Türkçe olarak yapılmalıdır. Başvurularda ad, soyad, imza, T.C. kimlik numarası veya yabancılar için kimlik bilgileri, tebligat adresi, varsa e-posta adresi, telefon veya faks numarası ve talep konusu yer almalıdır.`,
      `Başvuru formu imzalı şekilde RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti.’ye posta, elden teslim, noter veya kanunda belirtilen diğer yöntemlerle iletilebilir.`,
    ],
  },
  {
    title: "10. Veri Sahibine Cevap Verilmesi",
    content: [
      `İlgili talepler en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca maliyet doğurması halinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,32,48,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#c12030]">
            RSquare Studio
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
            RSquare Studio Yazılım Bilişim Teknolojileri Ltd. Şti. tarafından
            kişisel verilerin korunması ve işlenmesine ilişkin bilgilendirme
            metnidir.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <p className="mb-4 text-sm font-semibold text-white/50">
              İçindekiler
            </p>

            <nav className="space-y-3">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="block text-sm leading-6 text-white/55 transition hover:text-[#c12030]"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <article
              key={index}
              id={`section-${index}`}
              className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8"
            >
              <h2 className="mb-5 text-2xl font-semibold tracking-tight text-white">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-4">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-8 text-white/65 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="space-y-3">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-7 text-white/65 sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c12030]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <div className="rounded-3xl border border-[#c12030]/30 bg-[#c12030]/10 p-6 sm:p-8">
            <h2 className="mb-3 text-2xl font-semibold">İletişim Bilgileri</h2>
            <p className="text-sm leading-8 text-white/70 sm:text-base">
              Adres: Aşkan Mahallesi, Sancaktar Caddesi, 28/2, Meram/KONYA
            </p>
          </div>

          <div className="flex justify-start pt-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-[#c12030] hover:bg-[#c12030] hover:text-white"
            >
              Anasayfaya Dön
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}