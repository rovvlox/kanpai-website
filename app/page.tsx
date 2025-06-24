import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Sparkles, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">KanpAI</span>
            </div>
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
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-8 px-4 py-2 rounded-full">
            <Calendar className="h-4 w-4 mr-2" />
            Coming in April 2025
          </Badge>

          <h1 className="natural-gradient text-6xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
            KanpAI
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            乾杯のAIが、世界を変える
            <br />
            <span className="text-lg text-gray-500">クラフトビール × AI で新しい出会いを</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/service">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-4 text-lg">
                サービスを見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full px-8 py-4 text-lg"
              >
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">AIが変える、ビール体験</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto text-balance">
              人手不足を解消しながら、お客様に最適なクラフトビールをお届け
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="flat-card p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AIレコメンド</h3>
                <p className="text-gray-600 leading-relaxed">お客様の好みを分析し、最適なクラフトビールを瞬時に提案</p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">人手不足解消</h3>
                <p className="text-gray-600 leading-relaxed">スタッフの負担を軽減し、効率的な店舗運営をサポート</p>
              </CardContent>
            </Card>

            <Card className="flat-card p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">新しい出会い</h3>
                <p className="text-gray-600 leading-relaxed">普段選ばないビールとの出会いで、体験の幅を広げる</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Preview */}
      <section className="py-24 px-6 natural-gradient">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="flat-card p-12">
              <CardContent className="p-0 text-center">
                <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-6 px-4 py-2 rounded-full">
                  現在利用可能
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">KANPAI</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed text-balance">
                  ビアバーに設置するQRコードを通じて、お客様の好みを簡単な質問でヒアリング。
                  AIが即座にクラフトビールをレコメンドし、新しいビールとの出会いを創出します。
                </p>
                <Link href="/service">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-3">
                    詳しく見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-balance">クラフトビール × AI スタートアップ</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-balance">
              2025年4月1日設立予定。QUINK合同会社からスピンオフし、 「株式会社KanpAI」として新たなスタートを切ります。
            </p>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 rounded-full px-8 py-3"
              >
                会社情報を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <span className="text-xl font-semibold">KanpAI</span>
            </div>
            <div className="text-gray-400 text-sm">© 2025 株式会社KanpAI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
