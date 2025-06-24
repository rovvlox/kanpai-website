import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, Calendar, User, Mail, Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">KanpAI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-amber-600 font-semibold">
                About
              </Link>
              <Link href="/service" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Service
              </Link>
              <Link href="/recruit" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Recruit
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                News
              </Link>
              <Link href="/contact">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">Contact</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <span className="text-4xl">🍺</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">About KanpAI</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            クラフトビール × AI スタートアップ
            <br />
            <span className="text-lg text-gray-500">飲食業界を盛り上げるテクノロジーを提供</span>
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="flat-card p-12 text-center">
              <CardContent className="p-0">
                <span className="text-4xl mb-6 block">🍺</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">私たちのミッション</h2>
                <p className="text-gray-600 text-lg leading-relaxed text-balance">
                  「クラフトビール」「AIレコメンド」「人手不足解消」といったキーワードを軸に、
                  飲食業界を盛り上げるテクノロジーを提供していきます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">会社概要</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="flat-card p-12">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">会社名</h3>
                        <p className="text-gray-700">株式会社KanpAI</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">所在地</h3>
                        <p className="text-gray-700">
                          〒106-0032 東京都港区六本木6丁目10-1
                          <br />
                          六本木ヒルズ森タワー15F
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">設立予定日</h3>
                        <p className="text-gray-700">2025年4月1日</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <User className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">代表</h3>
                        <p className="text-gray-700">池田 世知</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 font-bold">¥</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">資本金</h3>
                        <p className="text-gray-700">1,000,000円</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">メールアドレス</h3>
                        <p className="text-gray-700">info@kanpai.tokyo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Profile */}
 <section className="py-24 px-6 bg-white">
  <div className="container mx-auto">
   <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">代表紹介</h2>
   </div>

   <div className="max-w-6xl mx-auto">
    <Card className="flat-card p-12">
     <CardContent className="p-0">
      <div className="grid md:grid-cols-3 gap-12">
       <div className="md:col-span-1">
        <div className="bg-gray-100 rounded-2xl aspect-square overflow-hidden">
         <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3c024f6-f6e6-4a42-8738-956ad8a24610-bunO2nloem5l1JUsT0axuqZK5SIBQO.webp" alt="CEOの画像" className="h-full w-full object-cover rounded-2xl" />
        </div>
       </div>

       <div className="md:col-span-2 space-y-8">
        <div>
         <h3 className="text-2xl font-bold text-gray-900 mb-6">プロフィール</h3>
         <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>2003年生まれ、熊本県熊本市出身。</p>
          <p>
           教育系事業で起業をし事業譲渡。その後、ライフイベントに関するメディア事業を立ち上げ事業売却。
          </p>
          <p>近年はクラフトビール関連事業を営むBrewtope社にてBizDev（事業開発）として勤務。</p>
          <p>現在は、「ビールの魅力をより多くの人に届ける」ための事業を複数手掛けている。</p>
         </div>
        </div>
       </div>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-100">
       <h3 className="text-2xl font-bold text-gray-900 mb-8">代表メッセージ</h3>
       <div className="bg-amber-50 p-8 rounded-2xl relative">
        <Quote className="h-8 w-8 text-amber-600 mb-6" />
        <div className="text-gray-700 space-y-4 leading-relaxed">
         <p className="text-lg font-medium">人とビールを"乾杯"でつなぐ。</p>
         <p>
          このシンプルな喜びを、AIやテクノロジーでどこまで広げられるか――その可能性に挑戦するのが、私たちの使命です。
         </p>
         <p>皆さんが思わず「乾杯！」と笑い合える瞬間を創り出すサービスを展開していきます。</p>
         <p>
          これからも新たな挑戦を続け、AIレコメンドや在庫管理といったテクノロジーを活用しながら、ビール業界と飲食体験を変革していきたいと思っています。
         </p>
         <p className="font-semibold text-amber-700">ぜひ、一緒に未来の「乾杯」を盛り上げましょう。</p>
        </div>
       </div>
      </div>
     </CardContent>
    </Card>
   </div>
  </div>
 </section>

      {/* CTA Section */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-balance">一緒に未来を創りませんか？</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/service">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-4">
                サービスを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/recruit">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full px-8 py-4"
              >
                採用情報
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
