import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Calendar, ExternalLink, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
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
              <Link href="/about" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/service" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Service
              </Link>
              <Link href="/recruit" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">
                Recruit
              </Link>
              <Link href="/news" className="text-amber-600 font-semibold">
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
            <Calendar className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">News</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            KanpAIの最新情報をお届けします
            <br />
            <span className="text-lg text-gray-500">プレスリリース・イベント情報</span>
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Beer EXPO 2025 Data Report */}
            <Card className="flat-card p-12">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                  </div>
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 px-4 py-2 rounded-full">
                    データレポート
                  </Badge>
                </div>
                <CardTitle className="text-2xl">🍻ビアEXPO2025をデータで読み解く</CardTitle>
                <p className="text-gray-600 mt-2">2025年4月 | AIレコメンドサービスの実証結果を公開</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  ビアEXPO2025にて実施したAIレコメンドサービス「KANPAI」の体験結果をデータで振り返ります。
                  数千回におよぶ利用実績から見えてきたクラフトビール市場の課題と可能性をご紹介します。
                </p>

                {/* Key Stats */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-600">数千人</div>
                    <div className="text-sm text-gray-600">体験者数</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <Star className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-600">85.8%</div>
                    <div className="text-sm text-gray-600">高評価率</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <TrendingUp className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-600">203社</div>
                    <div className="text-sm text-gray-600">参加ブルワリー</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <span className="text-2xl text-amber-600 mx-auto mb-2 block">🍺</span>
                    <div className="text-2xl font-bold text-amber-600">500+</div>
                    <div className="text-sm text-gray-600">提供銘柄</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">主な成果</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 星4.0以上の高評価が85.8%を記録</li>
                    <li>• 「迷わず注文できた」「思わぬ出会いがあった」との評価多数</li>
                    <li>• AIレコメンドによる選択支援の有効性を実証</li>
                    <li>• クラフトビール市場の構造的課題と可能性を明確化</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Beer EXPO 2025 Participation */}
            <Card className="flat-card p-12">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🍺</span>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 rounded-full">
                    イベント参加
                  </Badge>
                </div>
                <CardTitle className="text-2xl">ビアEXPO2025のリリースにて弊サービスが紹介されました</CardTitle>
                <p className="text-gray-600 mt-2">2025年4月9日-13日 | 幕張メッセ</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  2025年4月9日から13日にかけて幕張メッセで開催される国内最大規模のビールイベント「ビアEXPO2025」内のリリースにおいて、
                  弊社のAIビールレコメンドサービス「KanpAI」が紹介されました。
                </p>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-3">「KanpAI」の特徴</h4>
                  <p className="text-amber-700">
                    利用者の性格や食の好みを分析し、最適なクラフトビールを提案するサービスです。
                    ビール初心者の方でも、5つの質問に答えるだけで、自分にぴったりのビールを見つけることができます。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">イベント概要</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 参加企業: 203社</li>
                      <li>• 提供ビール: 500種類以上</li>
                      <li>• 会場: 幕張メッセ</li>
                      <li>• 期間: 2025年4月9日-13日</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">体験内容</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• QRコードでアクセス</li>
                      <li>• 5つの質問に回答</li>
                      <li>• AIが最適なビールを推薦</li>
                      <li>• その場で注文・体験</li>
                    </ul>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full"
                  asChild
                >
                  <a
                    href="https://prtimes.jp/main/html/rd/p/000000003.000154951.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    プレスリリースを見る
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Launch */}
            <Card className="flat-card p-12">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🚀</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2 rounded-full">
                    サービス開始
                  </Badge>
                </div>
                <CardTitle className="text-2xl">ビアEXPO2025でのご利用について</CardTitle>
                <p className="text-gray-600 mt-2">2025年4月 | 正式版ローンチ</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  こちらのイベントにて、AIによるクラフトビールレコメンドサービス「KANPAI」をご体験いただけます。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  正式版のローンチをビアEXPO2025でさせていただき、早速このクラフトビール業界に貢献出来ることが楽しみです🍻
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800">飲まず嫌いの克服の声もβ版でいただいております。みなさまぜひ！</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">
            クラフトビールをもっと自由に。 <br />
            一緒に未来の"乾杯"を盛り上げませんか？
          </h2>
          <Link href="/contact">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-4">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
